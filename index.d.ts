declare enum Category {
  '1xx' = '1xx',
  '2xx' = '2xx',
  '3xx' = '3xx',
  '4xx' = '4xx',
  '5xx' = '5xx',
}

declare enum Standard {
  'http' = 'http',
  'unofficial' = 'unofficial',
  'iis' = 'iis',
  'nginx' = 'nginx',
  'cloudflare' = 'cloudflare',
}

declare type ExtraInfo = {
  emoji: string;
  standard: Standard;
  category: {
    type: Category,
    message: string;
    description: string;
  };
  message: string;
  description: string;
};

declare const httpStatusExtra: {
  [errorCode: number]: ExtraInfo | undefined;
  [errorCode: string]: ExtraInfo | undefined;
};

export = httpStatusExtra;
