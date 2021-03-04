declare enum CategoryFamily {
  '1xx' = '1xx',
  '2xx' = '2xx',
  '3xx' = '3xx',
  '4xx' = '4xx',
  '5xx' = '5xx',
}

declare enum Standards {
  'http' = 'http',
  'unofficial' = 'unofficial',
  'aasaam' = 'aasaam',
  'iis' = 'iis',
  'nginx' = 'nginx',
  'cloudflare' = 'cloudflare',
  'elasticloadbalancing' = 'elasticloadbalancing',
}

type StatusCodes = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 218 | 226 | 300 | 301 | 302 | 303 | 304 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 419 | 420 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 437 | 438 | 439 | 440 | 444 | 449 | 450 | 451 | 460 | 463 | 494 | 495 | 496 | 497 | 498 | 499 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511 | 520 | 521 | 522 | 523 | 524 | 525 | 526 | 527 | 530 | 538 | 598;

declare type Category = {
  [errorCode in CategoryFamily]: {
    message: string;
    description: string;
  };
};

declare type Statuses = {
  [statusCode in StatusCodes]: {
    emoji: string;
    standard: Standards;
    message: string;
    description: string;
  };
};

declare const httpStatusExtra: {
  category: Category;
  statusCodes: Statuses;
};

export = httpStatusExtra;
