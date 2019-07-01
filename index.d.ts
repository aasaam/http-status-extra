declare enum Standard {
  OFFICIAL = 'http',
  UNOFFICIAL = 'unofficial',
  IIS = 'iis',
  NGINX = 'nginx',
  CLOUDFLARE = 'cloudflare',
}

declare type ExtraInfo = {
  emoji: string;
  standard: Standard;
  message: string;
  description: string;
};

declare const httpStatusExtra: {
  [errorCode: number]: ExtraInfo | undefined;
  [errorCode: string]: ExtraInfo | undefined;
};

export = httpStatusExtra;
