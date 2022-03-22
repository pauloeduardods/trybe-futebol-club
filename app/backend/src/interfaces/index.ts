export interface IService<T> {
  statusCode: keyof IHTTPStatusCode,
  payload: T,
}

export interface IServiceError {
  message: string,
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
}

export interface ILoginResponse {
  token: string;
  user: Omit<IUser, 'password'>;
}

export interface IClub {
  id: number,
  clubName: string,
}

export interface IMatch {
  id?: number,
  homeTeam?: number,
  awayTeam?: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeClube?: IClub,
  awayClube?: IClub,
}

export interface IHTTPStatusCode {
  readonly Continue: number,
  readonly SwitchingProtocols: number,
  readonly Processing: number,
  readonly EarlyHints: number,
  readonly OK: number,
  readonly Created: number,
  readonly Accepted: number,
  readonly NonAuthoritativeInformation: number,
  readonly NoContent: number,
  readonly ResetContent: number,
  readonly PartialContent: number,
  readonly MultiStatus: number,
  readonly AlreadyReported: number,
  readonly IMUsed: number,
  readonly MultipleChoices: number,
  readonly MovedPermanently: number,
  readonly Found: number,
  readonly SeeOther: number,
  readonly NotModified: number,
  readonly UseProxy: number,
  readonly SwitchProxy: number,
  readonly TemporaryRedirect: number,
  readonly PermanentRedirect: number,
  readonly BadRequest: number,
  readonly Unauthorized: number,
  readonly PaymentRequired: number,
  readonly Forbidden: number,
  readonly NotFound: number,
  readonly MethodNotAllowed: number,
  readonly NotAcceptable: number,
  readonly ProxyAuthenticationRequired: number,
  readonly RequestTimeout: number,
  readonly Conflict: number,
  readonly Gone: number,
  readonly LengthRequired: number,
  readonly PreconditionFailed: number,
  readonly PayloadTooLarge: number,
  readonly URITooLong: number,
  readonly UnsupportedMediaType: number,
  readonly RangeNotSatisfiable: number,
  readonly ExpectationFailed: number,
  readonly ImATeapot: number,
  readonly MisdirectedRequest: number,
  readonly UnprocessableEntity: number,
  readonly Locked: number,
  readonly FailedDependency: number,
  readonly UpgradeRequired: number,
  readonly PreconditionRequired: number,
  readonly TooManyRequests: number,
  readonly RequestHeaderFieldsTooLarge: number,
  readonly UnavailableForLegalReasons: number,
  readonly InternalServerError: number,
  readonly NotImplemented: number,
  readonly BadGateway: number,
  readonly ServiceUnavailable: number,
  readonly GatewayTimeout: number,
  readonly HTTPVersionNotSupported: number,
  readonly VariantAlsoNegotiates: number,
  readonly InsufficientStorage: number,
  readonly LoopDetected: number,
  readonly NotExtended: number,
  readonly NetworkAuthenticationRequired: number,
}
