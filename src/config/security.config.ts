import helmet from 'helmet';
import * as csurf from 'csurf';
import rateLimit from 'express-rate-limit';
import { NestApplicationOptions } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * Configures security-related middleware for the NestJS application.
 * @param app - The NestJS application instance.
 */
export const securityConfig = (app) => {
  // Use Helmet for setting secure HTTP headers
  app.use(helmet());

  // Enable CSRF protection
  app.use(csurf({ cookie: true }));

  // Enable CORS (Cross-Origin Resource Sharing)
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*', // Allow specific origins or all
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and credentials
  });

  // Enable rate limiting to prevent brute-force attacks
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again later.',
    }),
  );

  // Set X-Powered-By header to a generic value
  app.set('x-powered-by', 'NestJS');

  // Disable XSS protection (optional, depending on your use case)
  app.use((req, res, next) => {
    res.removeHeader('X-XSS-Protection'); // Disable browser XSS protection
    next();
  });

  // Enable Strict Transport Security (HSTS)
  app.use((req, res, next) => {
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
    );
    next();
  });

  // Enable Content Security Policy (CSP)
  app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'self';",
    );
    next();
  });

  // Enable X-Content-Type-Options to prevent MIME type sniffing
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

  // Enable X-Frame-Options to prevent clickjacking
  app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    next();
  });

  // Enable Referrer-Policy to control referrer information
  app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
  });

  // Enable Expect-CT to enforce Certificate Transparency
  app.use((req, res, next) => {
    res.setHeader('Expect-CT', 'enforce, max-age=86400');
    next();
  });
};