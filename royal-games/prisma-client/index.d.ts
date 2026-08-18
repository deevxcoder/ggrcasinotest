
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Operator
 * 
 */
export type Operator = $Result.DefaultSelection<Prisma.$OperatorPayload>
/**
 * Model ApiToken
 * 
 */
export type ApiToken = $Result.DefaultSelection<Prisma.$ApiTokenPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model GameRound
 * 
 */
export type GameRound = $Result.DefaultSelection<Prisma.$GameRoundPayload>
/**
 * Model WebhookLog
 * 
 */
export type WebhookLog = $Result.DefaultSelection<Prisma.$WebhookLogPayload>
/**
 * Model OperatorTransaction
 * 
 */
export type OperatorTransaction = $Result.DefaultSelection<Prisma.$OperatorTransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operators
 * const operators = await prisma.operator.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Operators
   * const operators = await prisma.operator.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.operator`: Exposes CRUD operations for the **Operator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operators
    * const operators = await prisma.operator.findMany()
    * ```
    */
  get operator(): Prisma.OperatorDelegate<ExtArgs>;

  /**
   * `prisma.apiToken`: Exposes CRUD operations for the **ApiToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiTokens
    * const apiTokens = await prisma.apiToken.findMany()
    * ```
    */
  get apiToken(): Prisma.ApiTokenDelegate<ExtArgs>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs>;

  /**
   * `prisma.gameRound`: Exposes CRUD operations for the **GameRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRounds
    * const gameRounds = await prisma.gameRound.findMany()
    * ```
    */
  get gameRound(): Prisma.GameRoundDelegate<ExtArgs>;

  /**
   * `prisma.webhookLog`: Exposes CRUD operations for the **WebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookLogs
    * const webhookLogs = await prisma.webhookLog.findMany()
    * ```
    */
  get webhookLog(): Prisma.WebhookLogDelegate<ExtArgs>;

  /**
   * `prisma.operatorTransaction`: Exposes CRUD operations for the **OperatorTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperatorTransactions
    * const operatorTransactions = await prisma.operatorTransaction.findMany()
    * ```
    */
  get operatorTransaction(): Prisma.OperatorTransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Operator: 'Operator',
    ApiToken: 'ApiToken',
    GameSession: 'GameSession',
    GameRound: 'GameRound',
    WebhookLog: 'WebhookLog',
    OperatorTransaction: 'OperatorTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "operator" | "apiToken" | "gameSession" | "gameRound" | "webhookLog" | "operatorTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Operator: {
        payload: Prisma.$OperatorPayload<ExtArgs>
        fields: Prisma.OperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findFirst: {
            args: Prisma.OperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findMany: {
            args: Prisma.OperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          create: {
            args: Prisma.OperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          createMany: {
            args: Prisma.OperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          delete: {
            args: Prisma.OperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          update: {
            args: Prisma.OperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          deleteMany: {
            args: Prisma.OperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          aggregate: {
            args: Prisma.OperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperator>
          }
          groupBy: {
            args: Prisma.OperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatorCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorCountAggregateOutputType> | number
          }
        }
      }
      ApiToken: {
        payload: Prisma.$ApiTokenPayload<ExtArgs>
        fields: Prisma.ApiTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findFirst: {
            args: Prisma.ApiTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findMany: {
            args: Prisma.ApiTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          create: {
            args: Prisma.ApiTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          createMany: {
            args: Prisma.ApiTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          delete: {
            args: Prisma.ApiTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          update: {
            args: Prisma.ApiTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          deleteMany: {
            args: Prisma.ApiTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          aggregate: {
            args: Prisma.ApiTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiToken>
          }
          groupBy: {
            args: Prisma.ApiTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ApiTokenCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      GameRound: {
        payload: Prisma.$GameRoundPayload<ExtArgs>
        fields: Prisma.GameRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          findFirst: {
            args: Prisma.GameRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          findMany: {
            args: Prisma.GameRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>[]
          }
          create: {
            args: Prisma.GameRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          createMany: {
            args: Prisma.GameRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>[]
          }
          delete: {
            args: Prisma.GameRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          update: {
            args: Prisma.GameRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          deleteMany: {
            args: Prisma.GameRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRoundPayload>
          }
          aggregate: {
            args: Prisma.GameRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRound>
          }
          groupBy: {
            args: Prisma.GameRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRoundCountArgs<ExtArgs>
            result: $Utils.Optional<GameRoundCountAggregateOutputType> | number
          }
        }
      }
      WebhookLog: {
        payload: Prisma.$WebhookLogPayload<ExtArgs>
        fields: Prisma.WebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findFirst: {
            args: Prisma.WebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findMany: {
            args: Prisma.WebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          create: {
            args: Prisma.WebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          createMany: {
            args: Prisma.WebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          delete: {
            args: Prisma.WebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          update: {
            args: Prisma.WebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.WebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          aggregate: {
            args: Prisma.WebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookLog>
          }
          groupBy: {
            args: Prisma.WebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogCountAggregateOutputType> | number
          }
        }
      }
      OperatorTransaction: {
        payload: Prisma.$OperatorTransactionPayload<ExtArgs>
        fields: Prisma.OperatorTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatorTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatorTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          findFirst: {
            args: Prisma.OperatorTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatorTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          findMany: {
            args: Prisma.OperatorTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>[]
          }
          create: {
            args: Prisma.OperatorTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          createMany: {
            args: Prisma.OperatorTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatorTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>[]
          }
          delete: {
            args: Prisma.OperatorTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          update: {
            args: Prisma.OperatorTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OperatorTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatorTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperatorTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorTransactionPayload>
          }
          aggregate: {
            args: Prisma.OperatorTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperatorTransaction>
          }
          groupBy: {
            args: Prisma.OperatorTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatorTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OperatorCountOutputType
   */

  export type OperatorCountOutputType = {
    tokens: number
    sessions: number
    rounds: number
    transactions: number
    webhookLogs: number
  }

  export type OperatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | OperatorCountOutputTypeCountTokensArgs
    sessions?: boolean | OperatorCountOutputTypeCountSessionsArgs
    rounds?: boolean | OperatorCountOutputTypeCountRoundsArgs
    transactions?: boolean | OperatorCountOutputTypeCountTransactionsArgs
    webhookLogs?: boolean | OperatorCountOutputTypeCountWebhookLogsArgs
  }

  // Custom InputTypes
  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorCountOutputType
     */
    select?: OperatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRoundWhereInput
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorTransactionWhereInput
  }

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountWebhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
  }


  /**
   * Count Type GameSessionCountOutputType
   */

  export type GameSessionCountOutputType = {
    rounds: number
    webhookLogs: number
  }

  export type GameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | GameSessionCountOutputTypeCountRoundsArgs
    webhookLogs?: boolean | GameSessionCountOutputTypeCountWebhookLogsArgs
  }

  // Custom InputTypes
  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRoundWhereInput
  }

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountWebhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Operator
   */

  export type AggregateOperator = {
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  export type OperatorAvgAggregateOutputType = {
    balance: number | null
    ggrRate: number | null
  }

  export type OperatorSumAggregateOutputType = {
    balance: number | null
    ggrRate: number | null
  }

  export type OperatorMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    email: string | null
    passwordHash: string | null
    balance: number | null
    currency: string | null
    ggrRate: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatorMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    email: string | null
    passwordHash: string | null
    balance: number | null
    currency: string | null
    ggrRate: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OperatorCountAggregateOutputType = {
    id: number
    companyName: number
    email: number
    passwordHash: number
    balance: number
    currency: number
    ggrRate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OperatorAvgAggregateInputType = {
    balance?: true
    ggrRate?: true
  }

  export type OperatorSumAggregateInputType = {
    balance?: true
    ggrRate?: true
  }

  export type OperatorMinAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    passwordHash?: true
    balance?: true
    currency?: true
    ggrRate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatorMaxAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    passwordHash?: true
    balance?: true
    currency?: true
    ggrRate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OperatorCountAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    passwordHash?: true
    balance?: true
    currency?: true
    ggrRate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operator to aggregate.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operators
    **/
    _count?: true | OperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorMaxAggregateInputType
  }

  export type GetOperatorAggregateType<T extends OperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperator[P]>
      : GetScalarType<T[P], AggregateOperator[P]>
  }




  export type OperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithAggregationInput | OperatorOrderByWithAggregationInput[]
    by: OperatorScalarFieldEnum[] | OperatorScalarFieldEnum
    having?: OperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorCountAggregateInputType | true
    _avg?: OperatorAvgAggregateInputType
    _sum?: OperatorSumAggregateInputType
    _min?: OperatorMinAggregateInputType
    _max?: OperatorMaxAggregateInputType
  }

  export type OperatorGroupByOutputType = {
    id: string
    companyName: string
    email: string
    passwordHash: string
    balance: number
    currency: string
    ggrRate: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  type GetOperatorGroupByPayload<T extends OperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorGroupByOutputType[P]>
        }
      >
    >


  export type OperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    email?: boolean
    passwordHash?: boolean
    balance?: boolean
    currency?: boolean
    ggrRate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | Operator$tokensArgs<ExtArgs>
    sessions?: boolean | Operator$sessionsArgs<ExtArgs>
    rounds?: boolean | Operator$roundsArgs<ExtArgs>
    transactions?: boolean | Operator$transactionsArgs<ExtArgs>
    webhookLogs?: boolean | Operator$webhookLogsArgs<ExtArgs>
    _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    email?: boolean
    passwordHash?: boolean
    balance?: boolean
    currency?: boolean
    ggrRate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectScalar = {
    id?: boolean
    companyName?: boolean
    email?: boolean
    passwordHash?: boolean
    balance?: boolean
    currency?: boolean
    ggrRate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OperatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | Operator$tokensArgs<ExtArgs>
    sessions?: boolean | Operator$sessionsArgs<ExtArgs>
    rounds?: boolean | Operator$roundsArgs<ExtArgs>
    transactions?: boolean | Operator$transactionsArgs<ExtArgs>
    webhookLogs?: boolean | Operator$webhookLogsArgs<ExtArgs>
    _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operator"
    objects: {
      tokens: Prisma.$ApiTokenPayload<ExtArgs>[]
      sessions: Prisma.$GameSessionPayload<ExtArgs>[]
      rounds: Prisma.$GameRoundPayload<ExtArgs>[]
      transactions: Prisma.$OperatorTransactionPayload<ExtArgs>[]
      webhookLogs: Prisma.$WebhookLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      email: string
      passwordHash: string
      balance: number
      currency: string
      ggrRate: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operator"]>
    composites: {}
  }

  type OperatorGetPayload<S extends boolean | null | undefined | OperatorDefaultArgs> = $Result.GetResult<Prisma.$OperatorPayload, S>

  type OperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperatorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperatorCountAggregateInputType | true
    }

  export interface OperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operator'], meta: { name: 'Operator' } }
    /**
     * Find zero or one Operator that matches the filter.
     * @param {OperatorFindUniqueArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatorFindUniqueArgs>(args: SelectSubset<T, OperatorFindUniqueArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Operator that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperatorFindUniqueOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Operator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatorFindFirstArgs>(args?: SelectSubset<T, OperatorFindFirstArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Operator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operator.findMany()
     * 
     * // Get first 10 Operators
     * const operators = await prisma.operator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatorWithIdOnly = await prisma.operator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatorFindManyArgs>(args?: SelectSubset<T, OperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Operator.
     * @param {OperatorCreateArgs} args - Arguments to create a Operator.
     * @example
     * // Create one Operator
     * const Operator = await prisma.operator.create({
     *   data: {
     *     // ... data to create a Operator
     *   }
     * })
     * 
     */
    create<T extends OperatorCreateArgs>(args: SelectSubset<T, OperatorCreateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Operators.
     * @param {OperatorCreateManyArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatorCreateManyArgs>(args?: SelectSubset<T, OperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operators and returns the data saved in the database.
     * @param {OperatorCreateManyAndReturnArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operators and only return the `id`
     * const operatorWithIdOnly = await prisma.operator.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Operator.
     * @param {OperatorDeleteArgs} args - Arguments to delete one Operator.
     * @example
     * // Delete one Operator
     * const Operator = await prisma.operator.delete({
     *   where: {
     *     // ... filter to delete one Operator
     *   }
     * })
     * 
     */
    delete<T extends OperatorDeleteArgs>(args: SelectSubset<T, OperatorDeleteArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Operator.
     * @param {OperatorUpdateArgs} args - Arguments to update one Operator.
     * @example
     * // Update one Operator
     * const operator = await prisma.operator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatorUpdateArgs>(args: SelectSubset<T, OperatorUpdateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Operators.
     * @param {OperatorDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatorDeleteManyArgs>(args?: SelectSubset<T, OperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatorUpdateManyArgs>(args: SelectSubset<T, OperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operator.
     * @param {OperatorUpsertArgs} args - Arguments to update or create a Operator.
     * @example
     * // Update or create a Operator
     * const operator = await prisma.operator.upsert({
     *   create: {
     *     // ... data to create a Operator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operator we want to update
     *   }
     * })
     */
    upsert<T extends OperatorUpsertArgs>(args: SelectSubset<T, OperatorUpsertArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operator.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
    **/
    count<T extends OperatorCountArgs>(
      args?: Subset<T, OperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatorAggregateArgs>(args: Subset<T, OperatorAggregateArgs>): Prisma.PrismaPromise<GetOperatorAggregateType<T>>

    /**
     * Group by Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatorGroupByArgs['orderBy'] }
        : { orderBy?: OperatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operator model
   */
  readonly fields: OperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends Operator$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Operator$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends Operator$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Operator$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    rounds<T extends Operator$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Operator$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Operator$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Operator$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    webhookLogs<T extends Operator$webhookLogsArgs<ExtArgs> = {}>(args?: Subset<T, Operator$webhookLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operator model
   */ 
  interface OperatorFieldRefs {
    readonly id: FieldRef<"Operator", 'String'>
    readonly companyName: FieldRef<"Operator", 'String'>
    readonly email: FieldRef<"Operator", 'String'>
    readonly passwordHash: FieldRef<"Operator", 'String'>
    readonly balance: FieldRef<"Operator", 'Float'>
    readonly currency: FieldRef<"Operator", 'String'>
    readonly ggrRate: FieldRef<"Operator", 'Float'>
    readonly status: FieldRef<"Operator", 'String'>
    readonly createdAt: FieldRef<"Operator", 'DateTime'>
    readonly updatedAt: FieldRef<"Operator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operator findUnique
   */
  export type OperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findUniqueOrThrow
   */
  export type OperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findFirst
   */
  export type OperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findFirstOrThrow
   */
  export type OperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findMany
   */
  export type OperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter, which Operators to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator create
   */
  export type OperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Operator.
     */
    data: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
  }

  /**
   * Operator createMany
   */
  export type OperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
  }

  /**
   * Operator createManyAndReturn
   */
  export type OperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
  }

  /**
   * Operator update
   */
  export type OperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Operator.
     */
    data: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
    /**
     * Choose, which Operator to update.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator updateMany
   */
  export type OperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
  }

  /**
   * Operator upsert
   */
  export type OperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Operator to update in case it exists.
     */
    where: OperatorWhereUniqueInput
    /**
     * In case the Operator found by the `where` argument doesn't exist, create a new Operator with this data.
     */
    create: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
    /**
     * In case the Operator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
  }

  /**
   * Operator delete
   */
  export type OperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
    /**
     * Filter which Operator to delete.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator deleteMany
   */
  export type OperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operators to delete
     */
    where?: OperatorWhereInput
  }

  /**
   * Operator.tokens
   */
  export type Operator$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    cursor?: ApiTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * Operator.sessions
   */
  export type Operator$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Operator.rounds
   */
  export type Operator$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    where?: GameRoundWhereInput
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    cursor?: GameRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRoundScalarFieldEnum | GameRoundScalarFieldEnum[]
  }

  /**
   * Operator.transactions
   */
  export type Operator$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    where?: OperatorTransactionWhereInput
    orderBy?: OperatorTransactionOrderByWithRelationInput | OperatorTransactionOrderByWithRelationInput[]
    cursor?: OperatorTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatorTransactionScalarFieldEnum | OperatorTransactionScalarFieldEnum[]
  }

  /**
   * Operator.webhookLogs
   */
  export type Operator$webhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    cursor?: WebhookLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * Operator without action
   */
  export type OperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorInclude<ExtArgs> | null
  }


  /**
   * Model ApiToken
   */

  export type AggregateApiToken = {
    _count: ApiTokenCountAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  export type ApiTokenMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    token: string | null
    secretKey: string | null
    name: string | null
    isLive: boolean | null
    ipWhitelist: string | null
    createdAt: Date | null
  }

  export type ApiTokenMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    token: string | null
    secretKey: string | null
    name: string | null
    isLive: boolean | null
    ipWhitelist: string | null
    createdAt: Date | null
  }

  export type ApiTokenCountAggregateOutputType = {
    id: number
    operatorId: number
    token: number
    secretKey: number
    name: number
    isLive: number
    ipWhitelist: number
    createdAt: number
    _all: number
  }


  export type ApiTokenMinAggregateInputType = {
    id?: true
    operatorId?: true
    token?: true
    secretKey?: true
    name?: true
    isLive?: true
    ipWhitelist?: true
    createdAt?: true
  }

  export type ApiTokenMaxAggregateInputType = {
    id?: true
    operatorId?: true
    token?: true
    secretKey?: true
    name?: true
    isLive?: true
    ipWhitelist?: true
    createdAt?: true
  }

  export type ApiTokenCountAggregateInputType = {
    id?: true
    operatorId?: true
    token?: true
    secretKey?: true
    name?: true
    isLive?: true
    ipWhitelist?: true
    createdAt?: true
    _all?: true
  }

  export type ApiTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiToken to aggregate.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiTokens
    **/
    _count?: true | ApiTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiTokenMaxAggregateInputType
  }

  export type GetApiTokenAggregateType<T extends ApiTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateApiToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiToken[P]>
      : GetScalarType<T[P], AggregateApiToken[P]>
  }




  export type ApiTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithAggregationInput | ApiTokenOrderByWithAggregationInput[]
    by: ApiTokenScalarFieldEnum[] | ApiTokenScalarFieldEnum
    having?: ApiTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiTokenCountAggregateInputType | true
    _min?: ApiTokenMinAggregateInputType
    _max?: ApiTokenMaxAggregateInputType
  }

  export type ApiTokenGroupByOutputType = {
    id: string
    operatorId: string
    token: string
    secretKey: string
    name: string
    isLive: boolean
    ipWhitelist: string | null
    createdAt: Date
    _count: ApiTokenCountAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  type GetApiTokenGroupByPayload<T extends ApiTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
        }
      >
    >


  export type ApiTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    token?: boolean
    secretKey?: boolean
    name?: boolean
    isLive?: boolean
    ipWhitelist?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    token?: boolean
    secretKey?: boolean
    name?: boolean
    isLive?: boolean
    ipWhitelist?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectScalar = {
    id?: boolean
    operatorId?: boolean
    token?: boolean
    secretKey?: boolean
    name?: boolean
    isLive?: boolean
    ipWhitelist?: boolean
    createdAt?: boolean
  }

  export type ApiTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }
  export type ApiTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }

  export type $ApiTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiToken"
    objects: {
      operator: Prisma.$OperatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string
      token: string
      secretKey: string
      name: string
      isLive: boolean
      ipWhitelist: string | null
      createdAt: Date
    }, ExtArgs["result"]["apiToken"]>
    composites: {}
  }

  type ApiTokenGetPayload<S extends boolean | null | undefined | ApiTokenDefaultArgs> = $Result.GetResult<Prisma.$ApiTokenPayload, S>

  type ApiTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiTokenCountAggregateInputType | true
    }

  export interface ApiTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiToken'], meta: { name: 'ApiToken' } }
    /**
     * Find zero or one ApiToken that matches the filter.
     * @param {ApiTokenFindUniqueArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiTokenFindUniqueArgs>(args: SelectSubset<T, ApiTokenFindUniqueArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApiToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiTokenFindUniqueOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApiToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiTokenFindFirstArgs>(args?: SelectSubset<T, ApiTokenFindFirstArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApiToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApiTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiTokens
     * const apiTokens = await prisma.apiToken.findMany()
     * 
     * // Get first 10 ApiTokens
     * const apiTokens = await prisma.apiToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiTokenFindManyArgs>(args?: SelectSubset<T, ApiTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApiToken.
     * @param {ApiTokenCreateArgs} args - Arguments to create a ApiToken.
     * @example
     * // Create one ApiToken
     * const ApiToken = await prisma.apiToken.create({
     *   data: {
     *     // ... data to create a ApiToken
     *   }
     * })
     * 
     */
    create<T extends ApiTokenCreateArgs>(args: SelectSubset<T, ApiTokenCreateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApiTokens.
     * @param {ApiTokenCreateManyArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiTokenCreateManyArgs>(args?: SelectSubset<T, ApiTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiTokens and returns the data saved in the database.
     * @param {ApiTokenCreateManyAndReturnArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiTokens and only return the `id`
     * const apiTokenWithIdOnly = await prisma.apiToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ApiToken.
     * @param {ApiTokenDeleteArgs} args - Arguments to delete one ApiToken.
     * @example
     * // Delete one ApiToken
     * const ApiToken = await prisma.apiToken.delete({
     *   where: {
     *     // ... filter to delete one ApiToken
     *   }
     * })
     * 
     */
    delete<T extends ApiTokenDeleteArgs>(args: SelectSubset<T, ApiTokenDeleteArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApiToken.
     * @param {ApiTokenUpdateArgs} args - Arguments to update one ApiToken.
     * @example
     * // Update one ApiToken
     * const apiToken = await prisma.apiToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiTokenUpdateArgs>(args: SelectSubset<T, ApiTokenUpdateArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApiTokens.
     * @param {ApiTokenDeleteManyArgs} args - Arguments to filter ApiTokens to delete.
     * @example
     * // Delete a few ApiTokens
     * const { count } = await prisma.apiToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiTokenDeleteManyArgs>(args?: SelectSubset<T, ApiTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiTokenUpdateManyArgs>(args: SelectSubset<T, ApiTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiToken.
     * @param {ApiTokenUpsertArgs} args - Arguments to update or create a ApiToken.
     * @example
     * // Update or create a ApiToken
     * const apiToken = await prisma.apiToken.upsert({
     *   create: {
     *     // ... data to create a ApiToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiToken we want to update
     *   }
     * })
     */
    upsert<T extends ApiTokenUpsertArgs>(args: SelectSubset<T, ApiTokenUpsertArgs<ExtArgs>>): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenCountArgs} args - Arguments to filter ApiTokens to count.
     * @example
     * // Count the number of ApiTokens
     * const count = await prisma.apiToken.count({
     *   where: {
     *     // ... the filter for the ApiTokens we want to count
     *   }
     * })
    **/
    count<T extends ApiTokenCountArgs>(
      args?: Subset<T, ApiTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiTokenAggregateArgs>(args: Subset<T, ApiTokenAggregateArgs>): Prisma.PrismaPromise<GetApiTokenAggregateType<T>>

    /**
     * Group by ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiTokenGroupByArgs['orderBy'] }
        : { orderBy?: ApiTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiToken model
   */
  readonly fields: ApiTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiToken model
   */ 
  interface ApiTokenFieldRefs {
    readonly id: FieldRef<"ApiToken", 'String'>
    readonly operatorId: FieldRef<"ApiToken", 'String'>
    readonly token: FieldRef<"ApiToken", 'String'>
    readonly secretKey: FieldRef<"ApiToken", 'String'>
    readonly name: FieldRef<"ApiToken", 'String'>
    readonly isLive: FieldRef<"ApiToken", 'Boolean'>
    readonly ipWhitelist: FieldRef<"ApiToken", 'String'>
    readonly createdAt: FieldRef<"ApiToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiToken findUnique
   */
  export type ApiTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findUniqueOrThrow
   */
  export type ApiTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findFirst
   */
  export type ApiTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findFirstOrThrow
   */
  export type ApiTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findMany
   */
  export type ApiTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter, which ApiTokens to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken create
   */
  export type ApiTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiToken.
     */
    data: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
  }

  /**
   * ApiToken createMany
   */
  export type ApiTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
  }

  /**
   * ApiToken createManyAndReturn
   */
  export type ApiTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiToken update
   */
  export type ApiTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiToken.
     */
    data: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
    /**
     * Choose, which ApiToken to update.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken updateMany
   */
  export type ApiTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
  }

  /**
   * ApiToken upsert
   */
  export type ApiTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiToken to update in case it exists.
     */
    where: ApiTokenWhereUniqueInput
    /**
     * In case the ApiToken found by the `where` argument doesn't exist, create a new ApiToken with this data.
     */
    create: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
    /**
     * In case the ApiToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
  }

  /**
   * ApiToken delete
   */
  export type ApiTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
    /**
     * Filter which ApiToken to delete.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken deleteMany
   */
  export type ApiTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiTokens to delete
     */
    where?: ApiTokenWhereInput
  }

  /**
   * ApiToken without action
   */
  export type ApiTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiTokenInclude<ExtArgs> | null
  }


  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    balance: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    balance: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    operatorId: string | null
    userId: string | null
    gameUid: string | null
    balance: number | null
    currency: string | null
    callbackUrl: string | null
    returnUrl: string | null
    status: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    operatorId: string | null
    userId: string | null
    gameUid: string | null
    balance: number | null
    currency: string | null
    callbackUrl: string | null
    returnUrl: string | null
    status: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    sessionId: number
    operatorId: number
    userId: number
    gameUid: number
    balance: number
    currency: number
    callbackUrl: number
    returnUrl: number
    status: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    balance?: true
  }

  export type GameSessionSumAggregateInputType = {
    balance?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    balance?: true
    currency?: true
    callbackUrl?: true
    returnUrl?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    balance?: true
    currency?: true
    callbackUrl?: true
    returnUrl?: true
    status?: true
    createdAt?: true
    expiresAt?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    balance?: true
    currency?: true
    callbackUrl?: true
    returnUrl?: true
    status?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: string
    sessionId: string
    operatorId: string
    userId: string
    gameUid: string
    balance: number
    currency: string
    callbackUrl: string
    returnUrl: string
    status: string
    createdAt: Date
    expiresAt: Date
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    balance?: boolean
    currency?: boolean
    callbackUrl?: boolean
    returnUrl?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    rounds?: boolean | GameSession$roundsArgs<ExtArgs>
    webhookLogs?: boolean | GameSession$webhookLogsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    balance?: boolean
    currency?: boolean
    callbackUrl?: boolean
    returnUrl?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    balance?: boolean
    currency?: boolean
    callbackUrl?: boolean
    returnUrl?: boolean
    status?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type GameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    rounds?: boolean | GameSession$roundsArgs<ExtArgs>
    webhookLogs?: boolean | GameSession$webhookLogsArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }

  export type $GameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      operator: Prisma.$OperatorPayload<ExtArgs>
      rounds: Prisma.$GameRoundPayload<ExtArgs>[]
      webhookLogs: Prisma.$WebhookLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      operatorId: string
      userId: string
      gameUid: string
      balance: number
      currency: string
      callbackUrl: string
      returnUrl: string
      status: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }

  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionFindUniqueArgs>(args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionFindFirstArgs>(args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionFindManyArgs>(args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
     */
    create<T extends GameSessionCreateArgs>(args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameSessions.
     * @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionCreateManyArgs>(args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSessions and returns the data saved in the database.
     * @param {GameSessionCreateManyAndReturnArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
     */
    delete<T extends GameSessionDeleteArgs>(args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionUpdateArgs>(args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionDeleteManyArgs>(args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionUpdateManyArgs>(args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionUpsertArgs>(args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rounds<T extends GameSession$roundsArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findMany"> | Null>
    webhookLogs<T extends GameSession$webhookLogsArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$webhookLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameSession model
   */ 
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'String'>
    readonly sessionId: FieldRef<"GameSession", 'String'>
    readonly operatorId: FieldRef<"GameSession", 'String'>
    readonly userId: FieldRef<"GameSession", 'String'>
    readonly gameUid: FieldRef<"GameSession", 'String'>
    readonly balance: FieldRef<"GameSession", 'Float'>
    readonly currency: FieldRef<"GameSession", 'String'>
    readonly callbackUrl: FieldRef<"GameSession", 'String'>
    readonly returnUrl: FieldRef<"GameSession", 'String'>
    readonly status: FieldRef<"GameSession", 'String'>
    readonly createdAt: FieldRef<"GameSession", 'DateTime'>
    readonly expiresAt: FieldRef<"GameSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }

  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
  }

  /**
   * GameSession createManyAndReturn
   */
  export type GameSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }

  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession.rounds
   */
  export type GameSession$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    where?: GameRoundWhereInput
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    cursor?: GameRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRoundScalarFieldEnum | GameRoundScalarFieldEnum[]
  }

  /**
   * GameSession.webhookLogs
   */
  export type GameSession$webhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    cursor?: WebhookLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
  }


  /**
   * Model GameRound
   */

  export type AggregateGameRound = {
    _count: GameRoundCountAggregateOutputType | null
    _avg: GameRoundAvgAggregateOutputType | null
    _sum: GameRoundSumAggregateOutputType | null
    _min: GameRoundMinAggregateOutputType | null
    _max: GameRoundMaxAggregateOutputType | null
  }

  export type GameRoundAvgAggregateOutputType = {
    betAmount: number | null
    winAmount: number | null
    creditAmount: number | null
    ggrFeeDeducted: number | null
  }

  export type GameRoundSumAggregateOutputType = {
    betAmount: number | null
    winAmount: number | null
    creditAmount: number | null
    ggrFeeDeducted: number | null
  }

  export type GameRoundMinAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    sessionId: string | null
    operatorId: string | null
    userId: string | null
    gameUid: string | null
    gameName: string | null
    gameRound: string | null
    betAmount: number | null
    winAmount: number | null
    creditAmount: number | null
    ggrFeeDeducted: number | null
    rawPayload: string | null
    createdAt: Date | null
  }

  export type GameRoundMaxAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    sessionId: string | null
    operatorId: string | null
    userId: string | null
    gameUid: string | null
    gameName: string | null
    gameRound: string | null
    betAmount: number | null
    winAmount: number | null
    creditAmount: number | null
    ggrFeeDeducted: number | null
    rawPayload: string | null
    createdAt: Date | null
  }

  export type GameRoundCountAggregateOutputType = {
    id: number
    serialNumber: number
    sessionId: number
    operatorId: number
    userId: number
    gameUid: number
    gameName: number
    gameRound: number
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted: number
    rawPayload: number
    createdAt: number
    _all: number
  }


  export type GameRoundAvgAggregateInputType = {
    betAmount?: true
    winAmount?: true
    creditAmount?: true
    ggrFeeDeducted?: true
  }

  export type GameRoundSumAggregateInputType = {
    betAmount?: true
    winAmount?: true
    creditAmount?: true
    ggrFeeDeducted?: true
  }

  export type GameRoundMinAggregateInputType = {
    id?: true
    serialNumber?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    gameName?: true
    gameRound?: true
    betAmount?: true
    winAmount?: true
    creditAmount?: true
    ggrFeeDeducted?: true
    rawPayload?: true
    createdAt?: true
  }

  export type GameRoundMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    gameName?: true
    gameRound?: true
    betAmount?: true
    winAmount?: true
    creditAmount?: true
    ggrFeeDeducted?: true
    rawPayload?: true
    createdAt?: true
  }

  export type GameRoundCountAggregateInputType = {
    id?: true
    serialNumber?: true
    sessionId?: true
    operatorId?: true
    userId?: true
    gameUid?: true
    gameName?: true
    gameRound?: true
    betAmount?: true
    winAmount?: true
    creditAmount?: true
    ggrFeeDeducted?: true
    rawPayload?: true
    createdAt?: true
    _all?: true
  }

  export type GameRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRound to aggregate.
     */
    where?: GameRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRounds to fetch.
     */
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRounds
    **/
    _count?: true | GameRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRoundMaxAggregateInputType
  }

  export type GetGameRoundAggregateType<T extends GameRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRound[P]>
      : GetScalarType<T[P], AggregateGameRound[P]>
  }




  export type GameRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRoundWhereInput
    orderBy?: GameRoundOrderByWithAggregationInput | GameRoundOrderByWithAggregationInput[]
    by: GameRoundScalarFieldEnum[] | GameRoundScalarFieldEnum
    having?: GameRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRoundCountAggregateInputType | true
    _avg?: GameRoundAvgAggregateInputType
    _sum?: GameRoundSumAggregateInputType
    _min?: GameRoundMinAggregateInputType
    _max?: GameRoundMaxAggregateInputType
  }

  export type GameRoundGroupByOutputType = {
    id: string
    serialNumber: string
    sessionId: string | null
    operatorId: string
    userId: string
    gameUid: string
    gameName: string
    gameRound: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted: number
    rawPayload: string | null
    createdAt: Date
    _count: GameRoundCountAggregateOutputType | null
    _avg: GameRoundAvgAggregateOutputType | null
    _sum: GameRoundSumAggregateOutputType | null
    _min: GameRoundMinAggregateOutputType | null
    _max: GameRoundMaxAggregateOutputType | null
  }

  type GetGameRoundGroupByPayload<T extends GameRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRoundGroupByOutputType[P]>
            : GetScalarType<T[P], GameRoundGroupByOutputType[P]>
        }
      >
    >


  export type GameRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    gameName?: boolean
    gameRound?: boolean
    betAmount?: boolean
    winAmount?: boolean
    creditAmount?: boolean
    ggrFeeDeducted?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    session?: boolean | GameRound$sessionArgs<ExtArgs>
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRound"]>

  export type GameRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    gameName?: boolean
    gameRound?: boolean
    betAmount?: boolean
    winAmount?: boolean
    creditAmount?: boolean
    ggrFeeDeducted?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    session?: boolean | GameRound$sessionArgs<ExtArgs>
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRound"]>

  export type GameRoundSelectScalar = {
    id?: boolean
    serialNumber?: boolean
    sessionId?: boolean
    operatorId?: boolean
    userId?: boolean
    gameUid?: boolean
    gameName?: boolean
    gameRound?: boolean
    betAmount?: boolean
    winAmount?: boolean
    creditAmount?: boolean
    ggrFeeDeducted?: boolean
    rawPayload?: boolean
    createdAt?: boolean
  }

  export type GameRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameRound$sessionArgs<ExtArgs>
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }
  export type GameRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameRound$sessionArgs<ExtArgs>
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }

  export type $GameRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRound"
    objects: {
      session: Prisma.$GameSessionPayload<ExtArgs> | null
      operator: Prisma.$OperatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNumber: string
      sessionId: string | null
      operatorId: string
      userId: string
      gameUid: string
      gameName: string
      gameRound: string | null
      betAmount: number
      winAmount: number
      creditAmount: number
      ggrFeeDeducted: number
      rawPayload: string | null
      createdAt: Date
    }, ExtArgs["result"]["gameRound"]>
    composites: {}
  }

  type GameRoundGetPayload<S extends boolean | null | undefined | GameRoundDefaultArgs> = $Result.GetResult<Prisma.$GameRoundPayload, S>

  type GameRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameRoundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameRoundCountAggregateInputType | true
    }

  export interface GameRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRound'], meta: { name: 'GameRound' } }
    /**
     * Find zero or one GameRound that matches the filter.
     * @param {GameRoundFindUniqueArgs} args - Arguments to find a GameRound
     * @example
     * // Get one GameRound
     * const gameRound = await prisma.gameRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRoundFindUniqueArgs>(args: SelectSubset<T, GameRoundFindUniqueArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameRound that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameRoundFindUniqueOrThrowArgs} args - Arguments to find a GameRound
     * @example
     * // Get one GameRound
     * const gameRound = await prisma.gameRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundFindFirstArgs} args - Arguments to find a GameRound
     * @example
     * // Get one GameRound
     * const gameRound = await prisma.gameRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRoundFindFirstArgs>(args?: SelectSubset<T, GameRoundFindFirstArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundFindFirstOrThrowArgs} args - Arguments to find a GameRound
     * @example
     * // Get one GameRound
     * const gameRound = await prisma.gameRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRounds
     * const gameRounds = await prisma.gameRound.findMany()
     * 
     * // Get first 10 GameRounds
     * const gameRounds = await prisma.gameRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRoundWithIdOnly = await prisma.gameRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRoundFindManyArgs>(args?: SelectSubset<T, GameRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameRound.
     * @param {GameRoundCreateArgs} args - Arguments to create a GameRound.
     * @example
     * // Create one GameRound
     * const GameRound = await prisma.gameRound.create({
     *   data: {
     *     // ... data to create a GameRound
     *   }
     * })
     * 
     */
    create<T extends GameRoundCreateArgs>(args: SelectSubset<T, GameRoundCreateArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameRounds.
     * @param {GameRoundCreateManyArgs} args - Arguments to create many GameRounds.
     * @example
     * // Create many GameRounds
     * const gameRound = await prisma.gameRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRoundCreateManyArgs>(args?: SelectSubset<T, GameRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRounds and returns the data saved in the database.
     * @param {GameRoundCreateManyAndReturnArgs} args - Arguments to create many GameRounds.
     * @example
     * // Create many GameRounds
     * const gameRound = await prisma.gameRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRounds and only return the `id`
     * const gameRoundWithIdOnly = await prisma.gameRound.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameRound.
     * @param {GameRoundDeleteArgs} args - Arguments to delete one GameRound.
     * @example
     * // Delete one GameRound
     * const GameRound = await prisma.gameRound.delete({
     *   where: {
     *     // ... filter to delete one GameRound
     *   }
     * })
     * 
     */
    delete<T extends GameRoundDeleteArgs>(args: SelectSubset<T, GameRoundDeleteArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameRound.
     * @param {GameRoundUpdateArgs} args - Arguments to update one GameRound.
     * @example
     * // Update one GameRound
     * const gameRound = await prisma.gameRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRoundUpdateArgs>(args: SelectSubset<T, GameRoundUpdateArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameRounds.
     * @param {GameRoundDeleteManyArgs} args - Arguments to filter GameRounds to delete.
     * @example
     * // Delete a few GameRounds
     * const { count } = await prisma.gameRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRoundDeleteManyArgs>(args?: SelectSubset<T, GameRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRounds
     * const gameRound = await prisma.gameRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRoundUpdateManyArgs>(args: SelectSubset<T, GameRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameRound.
     * @param {GameRoundUpsertArgs} args - Arguments to update or create a GameRound.
     * @example
     * // Update or create a GameRound
     * const gameRound = await prisma.gameRound.upsert({
     *   create: {
     *     // ... data to create a GameRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRound we want to update
     *   }
     * })
     */
    upsert<T extends GameRoundUpsertArgs>(args: SelectSubset<T, GameRoundUpsertArgs<ExtArgs>>): Prisma__GameRoundClient<$Result.GetResult<Prisma.$GameRoundPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundCountArgs} args - Arguments to filter GameRounds to count.
     * @example
     * // Count the number of GameRounds
     * const count = await prisma.gameRound.count({
     *   where: {
     *     // ... the filter for the GameRounds we want to count
     *   }
     * })
    **/
    count<T extends GameRoundCountArgs>(
      args?: Subset<T, GameRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameRoundAggregateArgs>(args: Subset<T, GameRoundAggregateArgs>): Prisma.PrismaPromise<GetGameRoundAggregateType<T>>

    /**
     * Group by GameRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRoundGroupByArgs['orderBy'] }
        : { orderBy?: GameRoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRound model
   */
  readonly fields: GameRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends GameRound$sessionArgs<ExtArgs> = {}>(args?: Subset<T, GameRound$sessionArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRound model
   */ 
  interface GameRoundFieldRefs {
    readonly id: FieldRef<"GameRound", 'String'>
    readonly serialNumber: FieldRef<"GameRound", 'String'>
    readonly sessionId: FieldRef<"GameRound", 'String'>
    readonly operatorId: FieldRef<"GameRound", 'String'>
    readonly userId: FieldRef<"GameRound", 'String'>
    readonly gameUid: FieldRef<"GameRound", 'String'>
    readonly gameName: FieldRef<"GameRound", 'String'>
    readonly gameRound: FieldRef<"GameRound", 'String'>
    readonly betAmount: FieldRef<"GameRound", 'Float'>
    readonly winAmount: FieldRef<"GameRound", 'Float'>
    readonly creditAmount: FieldRef<"GameRound", 'Float'>
    readonly ggrFeeDeducted: FieldRef<"GameRound", 'Float'>
    readonly rawPayload: FieldRef<"GameRound", 'String'>
    readonly createdAt: FieldRef<"GameRound", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameRound findUnique
   */
  export type GameRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter, which GameRound to fetch.
     */
    where: GameRoundWhereUniqueInput
  }

  /**
   * GameRound findUniqueOrThrow
   */
  export type GameRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter, which GameRound to fetch.
     */
    where: GameRoundWhereUniqueInput
  }

  /**
   * GameRound findFirst
   */
  export type GameRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter, which GameRound to fetch.
     */
    where?: GameRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRounds to fetch.
     */
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRounds.
     */
    cursor?: GameRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRounds.
     */
    distinct?: GameRoundScalarFieldEnum | GameRoundScalarFieldEnum[]
  }

  /**
   * GameRound findFirstOrThrow
   */
  export type GameRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter, which GameRound to fetch.
     */
    where?: GameRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRounds to fetch.
     */
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRounds.
     */
    cursor?: GameRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRounds.
     */
    distinct?: GameRoundScalarFieldEnum | GameRoundScalarFieldEnum[]
  }

  /**
   * GameRound findMany
   */
  export type GameRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter, which GameRounds to fetch.
     */
    where?: GameRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRounds to fetch.
     */
    orderBy?: GameRoundOrderByWithRelationInput | GameRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRounds.
     */
    cursor?: GameRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRounds.
     */
    skip?: number
    distinct?: GameRoundScalarFieldEnum | GameRoundScalarFieldEnum[]
  }

  /**
   * GameRound create
   */
  export type GameRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRound.
     */
    data: XOR<GameRoundCreateInput, GameRoundUncheckedCreateInput>
  }

  /**
   * GameRound createMany
   */
  export type GameRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRounds.
     */
    data: GameRoundCreateManyInput | GameRoundCreateManyInput[]
  }

  /**
   * GameRound createManyAndReturn
   */
  export type GameRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameRounds.
     */
    data: GameRoundCreateManyInput | GameRoundCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRound update
   */
  export type GameRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRound.
     */
    data: XOR<GameRoundUpdateInput, GameRoundUncheckedUpdateInput>
    /**
     * Choose, which GameRound to update.
     */
    where: GameRoundWhereUniqueInput
  }

  /**
   * GameRound updateMany
   */
  export type GameRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRounds.
     */
    data: XOR<GameRoundUpdateManyMutationInput, GameRoundUncheckedUpdateManyInput>
    /**
     * Filter which GameRounds to update
     */
    where?: GameRoundWhereInput
  }

  /**
   * GameRound upsert
   */
  export type GameRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRound to update in case it exists.
     */
    where: GameRoundWhereUniqueInput
    /**
     * In case the GameRound found by the `where` argument doesn't exist, create a new GameRound with this data.
     */
    create: XOR<GameRoundCreateInput, GameRoundUncheckedCreateInput>
    /**
     * In case the GameRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRoundUpdateInput, GameRoundUncheckedUpdateInput>
  }

  /**
   * GameRound delete
   */
  export type GameRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
    /**
     * Filter which GameRound to delete.
     */
    where: GameRoundWhereUniqueInput
  }

  /**
   * GameRound deleteMany
   */
  export type GameRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRounds to delete
     */
    where?: GameRoundWhereInput
  }

  /**
   * GameRound.session
   */
  export type GameRound$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
  }

  /**
   * GameRound without action
   */
  export type GameRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRound
     */
    select?: GameRoundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRoundInclude<ExtArgs> | null
  }


  /**
   * Model WebhookLog
   */

  export type AggregateWebhookLog = {
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  export type WebhookLogAvgAggregateOutputType = {
    responseCode: number | null
    attempts: number | null
  }

  export type WebhookLogSumAggregateOutputType = {
    responseCode: number | null
    attempts: number | null
  }

  export type WebhookLogMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    sessionId: string | null
    serialNumber: string | null
    targetUrl: string | null
    payload: string | null
    responseCode: number | null
    responseBody: string | null
    status: string | null
    attempts: number | null
    createdAt: Date | null
  }

  export type WebhookLogMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    sessionId: string | null
    serialNumber: string | null
    targetUrl: string | null
    payload: string | null
    responseCode: number | null
    responseBody: string | null
    status: string | null
    attempts: number | null
    createdAt: Date | null
  }

  export type WebhookLogCountAggregateOutputType = {
    id: number
    operatorId: number
    sessionId: number
    serialNumber: number
    targetUrl: number
    payload: number
    responseCode: number
    responseBody: number
    status: number
    attempts: number
    createdAt: number
    _all: number
  }


  export type WebhookLogAvgAggregateInputType = {
    responseCode?: true
    attempts?: true
  }

  export type WebhookLogSumAggregateInputType = {
    responseCode?: true
    attempts?: true
  }

  export type WebhookLogMinAggregateInputType = {
    id?: true
    operatorId?: true
    sessionId?: true
    serialNumber?: true
    targetUrl?: true
    payload?: true
    responseCode?: true
    responseBody?: true
    status?: true
    attempts?: true
    createdAt?: true
  }

  export type WebhookLogMaxAggregateInputType = {
    id?: true
    operatorId?: true
    sessionId?: true
    serialNumber?: true
    targetUrl?: true
    payload?: true
    responseCode?: true
    responseBody?: true
    status?: true
    attempts?: true
    createdAt?: true
  }

  export type WebhookLogCountAggregateInputType = {
    id?: true
    operatorId?: true
    sessionId?: true
    serialNumber?: true
    targetUrl?: true
    payload?: true
    responseCode?: true
    responseBody?: true
    status?: true
    attempts?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLog to aggregate.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookLogs
    **/
    _count?: true | WebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookLogMaxAggregateInputType
  }

  export type GetWebhookLogAggregateType<T extends WebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookLog[P]>
      : GetScalarType<T[P], AggregateWebhookLog[P]>
  }




  export type WebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithAggregationInput | WebhookLogOrderByWithAggregationInput[]
    by: WebhookLogScalarFieldEnum[] | WebhookLogScalarFieldEnum
    having?: WebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookLogCountAggregateInputType | true
    _avg?: WebhookLogAvgAggregateInputType
    _sum?: WebhookLogSumAggregateInputType
    _min?: WebhookLogMinAggregateInputType
    _max?: WebhookLogMaxAggregateInputType
  }

  export type WebhookLogGroupByOutputType = {
    id: string
    operatorId: string
    sessionId: string | null
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode: number | null
    responseBody: string | null
    status: string
    attempts: number
    createdAt: Date
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  type GetWebhookLogGroupByPayload<T extends WebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type WebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    sessionId?: boolean
    serialNumber?: boolean
    targetUrl?: boolean
    payload?: boolean
    responseCode?: boolean
    responseBody?: boolean
    status?: boolean
    attempts?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    session?: boolean | WebhookLog$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    sessionId?: boolean
    serialNumber?: boolean
    targetUrl?: boolean
    payload?: boolean
    responseCode?: boolean
    responseBody?: boolean
    status?: boolean
    attempts?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    session?: boolean | WebhookLog$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectScalar = {
    id?: boolean
    operatorId?: boolean
    sessionId?: boolean
    serialNumber?: boolean
    targetUrl?: boolean
    payload?: boolean
    responseCode?: boolean
    responseBody?: boolean
    status?: boolean
    attempts?: boolean
    createdAt?: boolean
  }

  export type WebhookLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    session?: boolean | WebhookLog$sessionArgs<ExtArgs>
  }
  export type WebhookLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
    session?: boolean | WebhookLog$sessionArgs<ExtArgs>
  }

  export type $WebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookLog"
    objects: {
      operator: Prisma.$OperatorPayload<ExtArgs>
      session: Prisma.$GameSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string
      sessionId: string | null
      serialNumber: string
      targetUrl: string
      payload: string
      responseCode: number | null
      responseBody: string | null
      status: string
      attempts: number
      createdAt: Date
    }, ExtArgs["result"]["webhookLog"]>
    composites: {}
  }

  type WebhookLogGetPayload<S extends boolean | null | undefined | WebhookLogDefaultArgs> = $Result.GetResult<Prisma.$WebhookLogPayload, S>

  type WebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookLogCountAggregateInputType | true
    }

  export interface WebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookLog'], meta: { name: 'WebhookLog' } }
    /**
     * Find zero or one WebhookLog that matches the filter.
     * @param {WebhookLogFindUniqueArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookLogFindUniqueArgs>(args: SelectSubset<T, WebhookLogFindUniqueArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookLogFindUniqueOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookLogFindFirstArgs>(args?: SelectSubset<T, WebhookLogFindFirstArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany()
     * 
     * // Get first 10 WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookLogFindManyArgs>(args?: SelectSubset<T, WebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookLog.
     * @param {WebhookLogCreateArgs} args - Arguments to create a WebhookLog.
     * @example
     * // Create one WebhookLog
     * const WebhookLog = await prisma.webhookLog.create({
     *   data: {
     *     // ... data to create a WebhookLog
     *   }
     * })
     * 
     */
    create<T extends WebhookLogCreateArgs>(args: SelectSubset<T, WebhookLogCreateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookLogs.
     * @param {WebhookLogCreateManyArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookLogCreateManyArgs>(args?: SelectSubset<T, WebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookLogs and returns the data saved in the database.
     * @param {WebhookLogCreateManyAndReturnArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookLog.
     * @param {WebhookLogDeleteArgs} args - Arguments to delete one WebhookLog.
     * @example
     * // Delete one WebhookLog
     * const WebhookLog = await prisma.webhookLog.delete({
     *   where: {
     *     // ... filter to delete one WebhookLog
     *   }
     * })
     * 
     */
    delete<T extends WebhookLogDeleteArgs>(args: SelectSubset<T, WebhookLogDeleteArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookLog.
     * @param {WebhookLogUpdateArgs} args - Arguments to update one WebhookLog.
     * @example
     * // Update one WebhookLog
     * const webhookLog = await prisma.webhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookLogUpdateArgs>(args: SelectSubset<T, WebhookLogUpdateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookLogs.
     * @param {WebhookLogDeleteManyArgs} args - Arguments to filter WebhookLogs to delete.
     * @example
     * // Delete a few WebhookLogs
     * const { count } = await prisma.webhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookLogDeleteManyArgs>(args?: SelectSubset<T, WebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookLogUpdateManyArgs>(args: SelectSubset<T, WebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookLog.
     * @param {WebhookLogUpsertArgs} args - Arguments to update or create a WebhookLog.
     * @example
     * // Update or create a WebhookLog
     * const webhookLog = await prisma.webhookLog.upsert({
     *   create: {
     *     // ... data to create a WebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends WebhookLogUpsertArgs>(args: SelectSubset<T, WebhookLogUpsertArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogCountArgs} args - Arguments to filter WebhookLogs to count.
     * @example
     * // Count the number of WebhookLogs
     * const count = await prisma.webhookLog.count({
     *   where: {
     *     // ... the filter for the WebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends WebhookLogCountArgs>(
      args?: Subset<T, WebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookLogAggregateArgs>(args: Subset<T, WebhookLogAggregateArgs>): Prisma.PrismaPromise<GetWebhookLogAggregateType<T>>

    /**
     * Group by WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: WebhookLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookLog model
   */
  readonly fields: WebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    session<T extends WebhookLog$sessionArgs<ExtArgs> = {}>(args?: Subset<T, WebhookLog$sessionArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookLog model
   */ 
  interface WebhookLogFieldRefs {
    readonly id: FieldRef<"WebhookLog", 'String'>
    readonly operatorId: FieldRef<"WebhookLog", 'String'>
    readonly sessionId: FieldRef<"WebhookLog", 'String'>
    readonly serialNumber: FieldRef<"WebhookLog", 'String'>
    readonly targetUrl: FieldRef<"WebhookLog", 'String'>
    readonly payload: FieldRef<"WebhookLog", 'String'>
    readonly responseCode: FieldRef<"WebhookLog", 'Int'>
    readonly responseBody: FieldRef<"WebhookLog", 'String'>
    readonly status: FieldRef<"WebhookLog", 'String'>
    readonly attempts: FieldRef<"WebhookLog", 'Int'>
    readonly createdAt: FieldRef<"WebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookLog findUnique
   */
  export type WebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findUniqueOrThrow
   */
  export type WebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findFirst
   */
  export type WebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findFirstOrThrow
   */
  export type WebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findMany
   */
  export type WebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which WebhookLogs to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog create
   */
  export type WebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookLog.
     */
    data: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
  }

  /**
   * WebhookLog createMany
   */
  export type WebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
  }

  /**
   * WebhookLog createManyAndReturn
   */
  export type WebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookLog update
   */
  export type WebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookLog.
     */
    data: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
    /**
     * Choose, which WebhookLog to update.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog updateMany
   */
  export type WebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
  }

  /**
   * WebhookLog upsert
   */
  export type WebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookLog to update in case it exists.
     */
    where: WebhookLogWhereUniqueInput
    /**
     * In case the WebhookLog found by the `where` argument doesn't exist, create a new WebhookLog with this data.
     */
    create: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
    /**
     * In case the WebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
  }

  /**
   * WebhookLog delete
   */
  export type WebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
    /**
     * Filter which WebhookLog to delete.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog deleteMany
   */
  export type WebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLogs to delete
     */
    where?: WebhookLogWhereInput
  }

  /**
   * WebhookLog.session
   */
  export type WebhookLog$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
  }

  /**
   * WebhookLog without action
   */
  export type WebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookLogInclude<ExtArgs> | null
  }


  /**
   * Model OperatorTransaction
   */

  export type AggregateOperatorTransaction = {
    _count: OperatorTransactionCountAggregateOutputType | null
    _avg: OperatorTransactionAvgAggregateOutputType | null
    _sum: OperatorTransactionSumAggregateOutputType | null
    _min: OperatorTransactionMinAggregateOutputType | null
    _max: OperatorTransactionMaxAggregateOutputType | null
  }

  export type OperatorTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type OperatorTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type OperatorTransactionMinAggregateOutputType = {
    id: string | null
    operatorId: string | null
    type: string | null
    amount: number | null
    balanceAfter: number | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type OperatorTransactionMaxAggregateOutputType = {
    id: string | null
    operatorId: string | null
    type: string | null
    amount: number | null
    balanceAfter: number | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type OperatorTransactionCountAggregateOutputType = {
    id: number
    operatorId: number
    type: number
    amount: number
    balanceAfter: number
    referenceId: number
    description: number
    createdAt: number
    _all: number
  }


  export type OperatorTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type OperatorTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type OperatorTransactionMinAggregateInputType = {
    id?: true
    operatorId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type OperatorTransactionMaxAggregateInputType = {
    id?: true
    operatorId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type OperatorTransactionCountAggregateInputType = {
    id?: true
    operatorId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    referenceId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type OperatorTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatorTransaction to aggregate.
     */
    where?: OperatorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatorTransactions to fetch.
     */
    orderBy?: OperatorTransactionOrderByWithRelationInput | OperatorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperatorTransactions
    **/
    _count?: true | OperatorTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperatorTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperatorTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorTransactionMaxAggregateInputType
  }

  export type GetOperatorTransactionAggregateType<T extends OperatorTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOperatorTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperatorTransaction[P]>
      : GetScalarType<T[P], AggregateOperatorTransaction[P]>
  }




  export type OperatorTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorTransactionWhereInput
    orderBy?: OperatorTransactionOrderByWithAggregationInput | OperatorTransactionOrderByWithAggregationInput[]
    by: OperatorTransactionScalarFieldEnum[] | OperatorTransactionScalarFieldEnum
    having?: OperatorTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorTransactionCountAggregateInputType | true
    _avg?: OperatorTransactionAvgAggregateInputType
    _sum?: OperatorTransactionSumAggregateInputType
    _min?: OperatorTransactionMinAggregateInputType
    _max?: OperatorTransactionMaxAggregateInputType
  }

  export type OperatorTransactionGroupByOutputType = {
    id: string
    operatorId: string
    type: string
    amount: number
    balanceAfter: number
    referenceId: string | null
    description: string | null
    createdAt: Date
    _count: OperatorTransactionCountAggregateOutputType | null
    _avg: OperatorTransactionAvgAggregateOutputType | null
    _sum: OperatorTransactionSumAggregateOutputType | null
    _min: OperatorTransactionMinAggregateOutputType | null
    _max: OperatorTransactionMaxAggregateOutputType | null
  }

  type GetOperatorTransactionGroupByPayload<T extends OperatorTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OperatorTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatorTransaction"]>

  export type OperatorTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    operatorId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatorTransaction"]>

  export type OperatorTransactionSelectScalar = {
    id?: boolean
    operatorId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type OperatorTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }
  export type OperatorTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | OperatorDefaultArgs<ExtArgs>
  }

  export type $OperatorTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperatorTransaction"
    objects: {
      operator: Prisma.$OperatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      operatorId: string
      type: string
      amount: number
      balanceAfter: number
      referenceId: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["operatorTransaction"]>
    composites: {}
  }

  type OperatorTransactionGetPayload<S extends boolean | null | undefined | OperatorTransactionDefaultArgs> = $Result.GetResult<Prisma.$OperatorTransactionPayload, S>

  type OperatorTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperatorTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperatorTransactionCountAggregateInputType | true
    }

  export interface OperatorTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperatorTransaction'], meta: { name: 'OperatorTransaction' } }
    /**
     * Find zero or one OperatorTransaction that matches the filter.
     * @param {OperatorTransactionFindUniqueArgs} args - Arguments to find a OperatorTransaction
     * @example
     * // Get one OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatorTransactionFindUniqueArgs>(args: SelectSubset<T, OperatorTransactionFindUniqueArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OperatorTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperatorTransactionFindUniqueOrThrowArgs} args - Arguments to find a OperatorTransaction
     * @example
     * // Get one OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatorTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatorTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OperatorTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionFindFirstArgs} args - Arguments to find a OperatorTransaction
     * @example
     * // Get one OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatorTransactionFindFirstArgs>(args?: SelectSubset<T, OperatorTransactionFindFirstArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OperatorTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionFindFirstOrThrowArgs} args - Arguments to find a OperatorTransaction
     * @example
     * // Get one OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatorTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatorTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OperatorTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperatorTransactions
     * const operatorTransactions = await prisma.operatorTransaction.findMany()
     * 
     * // Get first 10 OperatorTransactions
     * const operatorTransactions = await prisma.operatorTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatorTransactionWithIdOnly = await prisma.operatorTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatorTransactionFindManyArgs>(args?: SelectSubset<T, OperatorTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OperatorTransaction.
     * @param {OperatorTransactionCreateArgs} args - Arguments to create a OperatorTransaction.
     * @example
     * // Create one OperatorTransaction
     * const OperatorTransaction = await prisma.operatorTransaction.create({
     *   data: {
     *     // ... data to create a OperatorTransaction
     *   }
     * })
     * 
     */
    create<T extends OperatorTransactionCreateArgs>(args: SelectSubset<T, OperatorTransactionCreateArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OperatorTransactions.
     * @param {OperatorTransactionCreateManyArgs} args - Arguments to create many OperatorTransactions.
     * @example
     * // Create many OperatorTransactions
     * const operatorTransaction = await prisma.operatorTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatorTransactionCreateManyArgs>(args?: SelectSubset<T, OperatorTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperatorTransactions and returns the data saved in the database.
     * @param {OperatorTransactionCreateManyAndReturnArgs} args - Arguments to create many OperatorTransactions.
     * @example
     * // Create many OperatorTransactions
     * const operatorTransaction = await prisma.operatorTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperatorTransactions and only return the `id`
     * const operatorTransactionWithIdOnly = await prisma.operatorTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatorTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatorTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OperatorTransaction.
     * @param {OperatorTransactionDeleteArgs} args - Arguments to delete one OperatorTransaction.
     * @example
     * // Delete one OperatorTransaction
     * const OperatorTransaction = await prisma.operatorTransaction.delete({
     *   where: {
     *     // ... filter to delete one OperatorTransaction
     *   }
     * })
     * 
     */
    delete<T extends OperatorTransactionDeleteArgs>(args: SelectSubset<T, OperatorTransactionDeleteArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OperatorTransaction.
     * @param {OperatorTransactionUpdateArgs} args - Arguments to update one OperatorTransaction.
     * @example
     * // Update one OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatorTransactionUpdateArgs>(args: SelectSubset<T, OperatorTransactionUpdateArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OperatorTransactions.
     * @param {OperatorTransactionDeleteManyArgs} args - Arguments to filter OperatorTransactions to delete.
     * @example
     * // Delete a few OperatorTransactions
     * const { count } = await prisma.operatorTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatorTransactionDeleteManyArgs>(args?: SelectSubset<T, OperatorTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatorTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperatorTransactions
     * const operatorTransaction = await prisma.operatorTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatorTransactionUpdateManyArgs>(args: SelectSubset<T, OperatorTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OperatorTransaction.
     * @param {OperatorTransactionUpsertArgs} args - Arguments to update or create a OperatorTransaction.
     * @example
     * // Update or create a OperatorTransaction
     * const operatorTransaction = await prisma.operatorTransaction.upsert({
     *   create: {
     *     // ... data to create a OperatorTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperatorTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OperatorTransactionUpsertArgs>(args: SelectSubset<T, OperatorTransactionUpsertArgs<ExtArgs>>): Prisma__OperatorTransactionClient<$Result.GetResult<Prisma.$OperatorTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OperatorTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionCountArgs} args - Arguments to filter OperatorTransactions to count.
     * @example
     * // Count the number of OperatorTransactions
     * const count = await prisma.operatorTransaction.count({
     *   where: {
     *     // ... the filter for the OperatorTransactions we want to count
     *   }
     * })
    **/
    count<T extends OperatorTransactionCountArgs>(
      args?: Subset<T, OperatorTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperatorTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatorTransactionAggregateArgs>(args: Subset<T, OperatorTransactionAggregateArgs>): Prisma.PrismaPromise<GetOperatorTransactionAggregateType<T>>

    /**
     * Group by OperatorTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperatorTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatorTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OperatorTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatorTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperatorTransaction model
   */
  readonly fields: OperatorTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperatorTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatorTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operator<T extends OperatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperatorDefaultArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OperatorTransaction model
   */ 
  interface OperatorTransactionFieldRefs {
    readonly id: FieldRef<"OperatorTransaction", 'String'>
    readonly operatorId: FieldRef<"OperatorTransaction", 'String'>
    readonly type: FieldRef<"OperatorTransaction", 'String'>
    readonly amount: FieldRef<"OperatorTransaction", 'Float'>
    readonly balanceAfter: FieldRef<"OperatorTransaction", 'Float'>
    readonly referenceId: FieldRef<"OperatorTransaction", 'String'>
    readonly description: FieldRef<"OperatorTransaction", 'String'>
    readonly createdAt: FieldRef<"OperatorTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OperatorTransaction findUnique
   */
  export type OperatorTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OperatorTransaction to fetch.
     */
    where: OperatorTransactionWhereUniqueInput
  }

  /**
   * OperatorTransaction findUniqueOrThrow
   */
  export type OperatorTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OperatorTransaction to fetch.
     */
    where: OperatorTransactionWhereUniqueInput
  }

  /**
   * OperatorTransaction findFirst
   */
  export type OperatorTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OperatorTransaction to fetch.
     */
    where?: OperatorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatorTransactions to fetch.
     */
    orderBy?: OperatorTransactionOrderByWithRelationInput | OperatorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatorTransactions.
     */
    cursor?: OperatorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatorTransactions.
     */
    distinct?: OperatorTransactionScalarFieldEnum | OperatorTransactionScalarFieldEnum[]
  }

  /**
   * OperatorTransaction findFirstOrThrow
   */
  export type OperatorTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OperatorTransaction to fetch.
     */
    where?: OperatorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatorTransactions to fetch.
     */
    orderBy?: OperatorTransactionOrderByWithRelationInput | OperatorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatorTransactions.
     */
    cursor?: OperatorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatorTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatorTransactions.
     */
    distinct?: OperatorTransactionScalarFieldEnum | OperatorTransactionScalarFieldEnum[]
  }

  /**
   * OperatorTransaction findMany
   */
  export type OperatorTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OperatorTransactions to fetch.
     */
    where?: OperatorTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatorTransactions to fetch.
     */
    orderBy?: OperatorTransactionOrderByWithRelationInput | OperatorTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperatorTransactions.
     */
    cursor?: OperatorTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatorTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatorTransactions.
     */
    skip?: number
    distinct?: OperatorTransactionScalarFieldEnum | OperatorTransactionScalarFieldEnum[]
  }

  /**
   * OperatorTransaction create
   */
  export type OperatorTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a OperatorTransaction.
     */
    data: XOR<OperatorTransactionCreateInput, OperatorTransactionUncheckedCreateInput>
  }

  /**
   * OperatorTransaction createMany
   */
  export type OperatorTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperatorTransactions.
     */
    data: OperatorTransactionCreateManyInput | OperatorTransactionCreateManyInput[]
  }

  /**
   * OperatorTransaction createManyAndReturn
   */
  export type OperatorTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OperatorTransactions.
     */
    data: OperatorTransactionCreateManyInput | OperatorTransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperatorTransaction update
   */
  export type OperatorTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a OperatorTransaction.
     */
    data: XOR<OperatorTransactionUpdateInput, OperatorTransactionUncheckedUpdateInput>
    /**
     * Choose, which OperatorTransaction to update.
     */
    where: OperatorTransactionWhereUniqueInput
  }

  /**
   * OperatorTransaction updateMany
   */
  export type OperatorTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperatorTransactions.
     */
    data: XOR<OperatorTransactionUpdateManyMutationInput, OperatorTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OperatorTransactions to update
     */
    where?: OperatorTransactionWhereInput
  }

  /**
   * OperatorTransaction upsert
   */
  export type OperatorTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the OperatorTransaction to update in case it exists.
     */
    where: OperatorTransactionWhereUniqueInput
    /**
     * In case the OperatorTransaction found by the `where` argument doesn't exist, create a new OperatorTransaction with this data.
     */
    create: XOR<OperatorTransactionCreateInput, OperatorTransactionUncheckedCreateInput>
    /**
     * In case the OperatorTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatorTransactionUpdateInput, OperatorTransactionUncheckedUpdateInput>
  }

  /**
   * OperatorTransaction delete
   */
  export type OperatorTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
    /**
     * Filter which OperatorTransaction to delete.
     */
    where: OperatorTransactionWhereUniqueInput
  }

  /**
   * OperatorTransaction deleteMany
   */
  export type OperatorTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatorTransactions to delete
     */
    where?: OperatorTransactionWhereInput
  }

  /**
   * OperatorTransaction without action
   */
  export type OperatorTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorTransaction
     */
    select?: OperatorTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatorTransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OperatorScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    email: 'email',
    passwordHash: 'passwordHash',
    balance: 'balance',
    currency: 'currency',
    ggrRate: 'ggrRate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OperatorScalarFieldEnum = (typeof OperatorScalarFieldEnum)[keyof typeof OperatorScalarFieldEnum]


  export const ApiTokenScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    token: 'token',
    secretKey: 'secretKey',
    name: 'name',
    isLive: 'isLive',
    ipWhitelist: 'ipWhitelist',
    createdAt: 'createdAt'
  };

  export type ApiTokenScalarFieldEnum = (typeof ApiTokenScalarFieldEnum)[keyof typeof ApiTokenScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    operatorId: 'operatorId',
    userId: 'userId',
    gameUid: 'gameUid',
    balance: 'balance',
    currency: 'currency',
    callbackUrl: 'callbackUrl',
    returnUrl: 'returnUrl',
    status: 'status',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const GameRoundScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    sessionId: 'sessionId',
    operatorId: 'operatorId',
    userId: 'userId',
    gameUid: 'gameUid',
    gameName: 'gameName',
    gameRound: 'gameRound',
    betAmount: 'betAmount',
    winAmount: 'winAmount',
    creditAmount: 'creditAmount',
    ggrFeeDeducted: 'ggrFeeDeducted',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt'
  };

  export type GameRoundScalarFieldEnum = (typeof GameRoundScalarFieldEnum)[keyof typeof GameRoundScalarFieldEnum]


  export const WebhookLogScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    sessionId: 'sessionId',
    serialNumber: 'serialNumber',
    targetUrl: 'targetUrl',
    payload: 'payload',
    responseCode: 'responseCode',
    responseBody: 'responseBody',
    status: 'status',
    attempts: 'attempts',
    createdAt: 'createdAt'
  };

  export type WebhookLogScalarFieldEnum = (typeof WebhookLogScalarFieldEnum)[keyof typeof WebhookLogScalarFieldEnum]


  export const OperatorTransactionScalarFieldEnum: {
    id: 'id',
    operatorId: 'operatorId',
    type: 'type',
    amount: 'amount',
    balanceAfter: 'balanceAfter',
    referenceId: 'referenceId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type OperatorTransactionScalarFieldEnum = (typeof OperatorTransactionScalarFieldEnum)[keyof typeof OperatorTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OperatorWhereInput = {
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    id?: StringFilter<"Operator"> | string
    companyName?: StringFilter<"Operator"> | string
    email?: StringFilter<"Operator"> | string
    passwordHash?: StringFilter<"Operator"> | string
    balance?: FloatFilter<"Operator"> | number
    currency?: StringFilter<"Operator"> | string
    ggrRate?: FloatFilter<"Operator"> | number
    status?: StringFilter<"Operator"> | string
    createdAt?: DateTimeFilter<"Operator"> | Date | string
    updatedAt?: DateTimeFilter<"Operator"> | Date | string
    tokens?: ApiTokenListRelationFilter
    sessions?: GameSessionListRelationFilter
    rounds?: GameRoundListRelationFilter
    transactions?: OperatorTransactionListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }

  export type OperatorOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    ggrRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: ApiTokenOrderByRelationAggregateInput
    sessions?: GameSessionOrderByRelationAggregateInput
    rounds?: GameRoundOrderByRelationAggregateInput
    transactions?: OperatorTransactionOrderByRelationAggregateInput
    webhookLogs?: WebhookLogOrderByRelationAggregateInput
  }

  export type OperatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    companyName?: StringFilter<"Operator"> | string
    passwordHash?: StringFilter<"Operator"> | string
    balance?: FloatFilter<"Operator"> | number
    currency?: StringFilter<"Operator"> | string
    ggrRate?: FloatFilter<"Operator"> | number
    status?: StringFilter<"Operator"> | string
    createdAt?: DateTimeFilter<"Operator"> | Date | string
    updatedAt?: DateTimeFilter<"Operator"> | Date | string
    tokens?: ApiTokenListRelationFilter
    sessions?: GameSessionListRelationFilter
    rounds?: GameRoundListRelationFilter
    transactions?: OperatorTransactionListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }, "id" | "email">

  export type OperatorOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    ggrRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OperatorCountOrderByAggregateInput
    _avg?: OperatorAvgOrderByAggregateInput
    _max?: OperatorMaxOrderByAggregateInput
    _min?: OperatorMinOrderByAggregateInput
    _sum?: OperatorSumOrderByAggregateInput
  }

  export type OperatorScalarWhereWithAggregatesInput = {
    AND?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    OR?: OperatorScalarWhereWithAggregatesInput[]
    NOT?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operator"> | string
    companyName?: StringWithAggregatesFilter<"Operator"> | string
    email?: StringWithAggregatesFilter<"Operator"> | string
    passwordHash?: StringWithAggregatesFilter<"Operator"> | string
    balance?: FloatWithAggregatesFilter<"Operator"> | number
    currency?: StringWithAggregatesFilter<"Operator"> | string
    ggrRate?: FloatWithAggregatesFilter<"Operator"> | number
    status?: StringWithAggregatesFilter<"Operator"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Operator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operator"> | Date | string
  }

  export type ApiTokenWhereInput = {
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    id?: StringFilter<"ApiToken"> | string
    operatorId?: StringFilter<"ApiToken"> | string
    token?: StringFilter<"ApiToken"> | string
    secretKey?: StringFilter<"ApiToken"> | string
    name?: StringFilter<"ApiToken"> | string
    isLive?: BoolFilter<"ApiToken"> | boolean
    ipWhitelist?: StringNullableFilter<"ApiToken"> | string | null
    createdAt?: DateTimeFilter<"ApiToken"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }

  export type ApiTokenOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    token?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
    isLive?: SortOrder
    ipWhitelist?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    operator?: OperatorOrderByWithRelationInput
  }

  export type ApiTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    operatorId?: StringFilter<"ApiToken"> | string
    secretKey?: StringFilter<"ApiToken"> | string
    name?: StringFilter<"ApiToken"> | string
    isLive?: BoolFilter<"ApiToken"> | boolean
    ipWhitelist?: StringNullableFilter<"ApiToken"> | string | null
    createdAt?: DateTimeFilter<"ApiToken"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }, "id" | "token">

  export type ApiTokenOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    token?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
    isLive?: SortOrder
    ipWhitelist?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiTokenCountOrderByAggregateInput
    _max?: ApiTokenMaxOrderByAggregateInput
    _min?: ApiTokenMinOrderByAggregateInput
  }

  export type ApiTokenScalarWhereWithAggregatesInput = {
    AND?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    OR?: ApiTokenScalarWhereWithAggregatesInput[]
    NOT?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiToken"> | string
    operatorId?: StringWithAggregatesFilter<"ApiToken"> | string
    token?: StringWithAggregatesFilter<"ApiToken"> | string
    secretKey?: StringWithAggregatesFilter<"ApiToken"> | string
    name?: StringWithAggregatesFilter<"ApiToken"> | string
    isLive?: BoolWithAggregatesFilter<"ApiToken"> | boolean
    ipWhitelist?: StringNullableWithAggregatesFilter<"ApiToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiToken"> | Date | string
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: StringFilter<"GameSession"> | string
    sessionId?: StringFilter<"GameSession"> | string
    operatorId?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    gameUid?: StringFilter<"GameSession"> | string
    balance?: FloatFilter<"GameSession"> | number
    currency?: StringFilter<"GameSession"> | string
    callbackUrl?: StringFilter<"GameSession"> | string
    returnUrl?: StringFilter<"GameSession"> | string
    status?: StringFilter<"GameSession"> | string
    createdAt?: DateTimeFilter<"GameSession"> | Date | string
    expiresAt?: DateTimeFilter<"GameSession"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
    rounds?: GameRoundListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    callbackUrl?: SortOrder
    returnUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    operator?: OperatorOrderByWithRelationInput
    rounds?: GameRoundOrderByRelationAggregateInput
    webhookLogs?: WebhookLogOrderByRelationAggregateInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    operatorId?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    gameUid?: StringFilter<"GameSession"> | string
    balance?: FloatFilter<"GameSession"> | number
    currency?: StringFilter<"GameSession"> | string
    callbackUrl?: StringFilter<"GameSession"> | string
    returnUrl?: StringFilter<"GameSession"> | string
    status?: StringFilter<"GameSession"> | string
    createdAt?: DateTimeFilter<"GameSession"> | Date | string
    expiresAt?: DateTimeFilter<"GameSession"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
    rounds?: GameRoundListRelationFilter
    webhookLogs?: WebhookLogListRelationFilter
  }, "id" | "sessionId">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    callbackUrl?: SortOrder
    returnUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSession"> | string
    sessionId?: StringWithAggregatesFilter<"GameSession"> | string
    operatorId?: StringWithAggregatesFilter<"GameSession"> | string
    userId?: StringWithAggregatesFilter<"GameSession"> | string
    gameUid?: StringWithAggregatesFilter<"GameSession"> | string
    balance?: FloatWithAggregatesFilter<"GameSession"> | number
    currency?: StringWithAggregatesFilter<"GameSession"> | string
    callbackUrl?: StringWithAggregatesFilter<"GameSession"> | string
    returnUrl?: StringWithAggregatesFilter<"GameSession"> | string
    status?: StringWithAggregatesFilter<"GameSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
  }

  export type GameRoundWhereInput = {
    AND?: GameRoundWhereInput | GameRoundWhereInput[]
    OR?: GameRoundWhereInput[]
    NOT?: GameRoundWhereInput | GameRoundWhereInput[]
    id?: StringFilter<"GameRound"> | string
    serialNumber?: StringFilter<"GameRound"> | string
    sessionId?: StringNullableFilter<"GameRound"> | string | null
    operatorId?: StringFilter<"GameRound"> | string
    userId?: StringFilter<"GameRound"> | string
    gameUid?: StringFilter<"GameRound"> | string
    gameName?: StringFilter<"GameRound"> | string
    gameRound?: StringNullableFilter<"GameRound"> | string | null
    betAmount?: FloatFilter<"GameRound"> | number
    winAmount?: FloatFilter<"GameRound"> | number
    creditAmount?: FloatFilter<"GameRound"> | number
    ggrFeeDeducted?: FloatFilter<"GameRound"> | number
    rawPayload?: StringNullableFilter<"GameRound"> | string | null
    createdAt?: DateTimeFilter<"GameRound"> | Date | string
    session?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }

  export type GameRoundOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    gameName?: SortOrder
    gameRound?: SortOrderInput | SortOrder
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: GameSessionOrderByWithRelationInput
    operator?: OperatorOrderByWithRelationInput
  }

  export type GameRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    AND?: GameRoundWhereInput | GameRoundWhereInput[]
    OR?: GameRoundWhereInput[]
    NOT?: GameRoundWhereInput | GameRoundWhereInput[]
    sessionId?: StringNullableFilter<"GameRound"> | string | null
    operatorId?: StringFilter<"GameRound"> | string
    userId?: StringFilter<"GameRound"> | string
    gameUid?: StringFilter<"GameRound"> | string
    gameName?: StringFilter<"GameRound"> | string
    gameRound?: StringNullableFilter<"GameRound"> | string | null
    betAmount?: FloatFilter<"GameRound"> | number
    winAmount?: FloatFilter<"GameRound"> | number
    creditAmount?: FloatFilter<"GameRound"> | number
    ggrFeeDeducted?: FloatFilter<"GameRound"> | number
    rawPayload?: StringNullableFilter<"GameRound"> | string | null
    createdAt?: DateTimeFilter<"GameRound"> | Date | string
    session?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }, "id" | "serialNumber">

  export type GameRoundOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    gameName?: SortOrder
    gameRound?: SortOrderInput | SortOrder
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GameRoundCountOrderByAggregateInput
    _avg?: GameRoundAvgOrderByAggregateInput
    _max?: GameRoundMaxOrderByAggregateInput
    _min?: GameRoundMinOrderByAggregateInput
    _sum?: GameRoundSumOrderByAggregateInput
  }

  export type GameRoundScalarWhereWithAggregatesInput = {
    AND?: GameRoundScalarWhereWithAggregatesInput | GameRoundScalarWhereWithAggregatesInput[]
    OR?: GameRoundScalarWhereWithAggregatesInput[]
    NOT?: GameRoundScalarWhereWithAggregatesInput | GameRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameRound"> | string
    serialNumber?: StringWithAggregatesFilter<"GameRound"> | string
    sessionId?: StringNullableWithAggregatesFilter<"GameRound"> | string | null
    operatorId?: StringWithAggregatesFilter<"GameRound"> | string
    userId?: StringWithAggregatesFilter<"GameRound"> | string
    gameUid?: StringWithAggregatesFilter<"GameRound"> | string
    gameName?: StringWithAggregatesFilter<"GameRound"> | string
    gameRound?: StringNullableWithAggregatesFilter<"GameRound"> | string | null
    betAmount?: FloatWithAggregatesFilter<"GameRound"> | number
    winAmount?: FloatWithAggregatesFilter<"GameRound"> | number
    creditAmount?: FloatWithAggregatesFilter<"GameRound"> | number
    ggrFeeDeducted?: FloatWithAggregatesFilter<"GameRound"> | number
    rawPayload?: StringNullableWithAggregatesFilter<"GameRound"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameRound"> | Date | string
  }

  export type WebhookLogWhereInput = {
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    operatorId?: StringFilter<"WebhookLog"> | string
    sessionId?: StringNullableFilter<"WebhookLog"> | string | null
    serialNumber?: StringFilter<"WebhookLog"> | string
    targetUrl?: StringFilter<"WebhookLog"> | string
    payload?: StringFilter<"WebhookLog"> | string
    responseCode?: IntNullableFilter<"WebhookLog"> | number | null
    responseBody?: StringNullableFilter<"WebhookLog"> | string | null
    status?: StringFilter<"WebhookLog"> | string
    attempts?: IntFilter<"WebhookLog"> | number
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
    session?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
  }

  export type WebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    serialNumber?: SortOrder
    targetUrl?: SortOrder
    payload?: SortOrder
    responseCode?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
    operator?: OperatorOrderByWithRelationInput
    session?: GameSessionOrderByWithRelationInput
  }

  export type WebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    operatorId?: StringFilter<"WebhookLog"> | string
    sessionId?: StringNullableFilter<"WebhookLog"> | string | null
    serialNumber?: StringFilter<"WebhookLog"> | string
    targetUrl?: StringFilter<"WebhookLog"> | string
    payload?: StringFilter<"WebhookLog"> | string
    responseCode?: IntNullableFilter<"WebhookLog"> | number | null
    responseBody?: StringNullableFilter<"WebhookLog"> | string | null
    status?: StringFilter<"WebhookLog"> | string
    attempts?: IntFilter<"WebhookLog"> | number
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
    session?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
  }, "id">

  export type WebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    serialNumber?: SortOrder
    targetUrl?: SortOrder
    payload?: SortOrder
    responseCode?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
    _count?: WebhookLogCountOrderByAggregateInput
    _avg?: WebhookLogAvgOrderByAggregateInput
    _max?: WebhookLogMaxOrderByAggregateInput
    _min?: WebhookLogMinOrderByAggregateInput
    _sum?: WebhookLogSumOrderByAggregateInput
  }

  export type WebhookLogScalarWhereWithAggregatesInput = {
    AND?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    OR?: WebhookLogScalarWhereWithAggregatesInput[]
    NOT?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookLog"> | string
    operatorId?: StringWithAggregatesFilter<"WebhookLog"> | string
    sessionId?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    serialNumber?: StringWithAggregatesFilter<"WebhookLog"> | string
    targetUrl?: StringWithAggregatesFilter<"WebhookLog"> | string
    payload?: StringWithAggregatesFilter<"WebhookLog"> | string
    responseCode?: IntNullableWithAggregatesFilter<"WebhookLog"> | number | null
    responseBody?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    status?: StringWithAggregatesFilter<"WebhookLog"> | string
    attempts?: IntWithAggregatesFilter<"WebhookLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
  }

  export type OperatorTransactionWhereInput = {
    AND?: OperatorTransactionWhereInput | OperatorTransactionWhereInput[]
    OR?: OperatorTransactionWhereInput[]
    NOT?: OperatorTransactionWhereInput | OperatorTransactionWhereInput[]
    id?: StringFilter<"OperatorTransaction"> | string
    operatorId?: StringFilter<"OperatorTransaction"> | string
    type?: StringFilter<"OperatorTransaction"> | string
    amount?: FloatFilter<"OperatorTransaction"> | number
    balanceAfter?: FloatFilter<"OperatorTransaction"> | number
    referenceId?: StringNullableFilter<"OperatorTransaction"> | string | null
    description?: StringNullableFilter<"OperatorTransaction"> | string | null
    createdAt?: DateTimeFilter<"OperatorTransaction"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }

  export type OperatorTransactionOrderByWithRelationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    operator?: OperatorOrderByWithRelationInput
  }

  export type OperatorTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperatorTransactionWhereInput | OperatorTransactionWhereInput[]
    OR?: OperatorTransactionWhereInput[]
    NOT?: OperatorTransactionWhereInput | OperatorTransactionWhereInput[]
    operatorId?: StringFilter<"OperatorTransaction"> | string
    type?: StringFilter<"OperatorTransaction"> | string
    amount?: FloatFilter<"OperatorTransaction"> | number
    balanceAfter?: FloatFilter<"OperatorTransaction"> | number
    referenceId?: StringNullableFilter<"OperatorTransaction"> | string | null
    description?: StringNullableFilter<"OperatorTransaction"> | string | null
    createdAt?: DateTimeFilter<"OperatorTransaction"> | Date | string
    operator?: XOR<OperatorRelationFilter, OperatorWhereInput>
  }, "id">

  export type OperatorTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    operatorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OperatorTransactionCountOrderByAggregateInput
    _avg?: OperatorTransactionAvgOrderByAggregateInput
    _max?: OperatorTransactionMaxOrderByAggregateInput
    _min?: OperatorTransactionMinOrderByAggregateInput
    _sum?: OperatorTransactionSumOrderByAggregateInput
  }

  export type OperatorTransactionScalarWhereWithAggregatesInput = {
    AND?: OperatorTransactionScalarWhereWithAggregatesInput | OperatorTransactionScalarWhereWithAggregatesInput[]
    OR?: OperatorTransactionScalarWhereWithAggregatesInput[]
    NOT?: OperatorTransactionScalarWhereWithAggregatesInput | OperatorTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OperatorTransaction"> | string
    operatorId?: StringWithAggregatesFilter<"OperatorTransaction"> | string
    type?: StringWithAggregatesFilter<"OperatorTransaction"> | string
    amount?: FloatWithAggregatesFilter<"OperatorTransaction"> | number
    balanceAfter?: FloatWithAggregatesFilter<"OperatorTransaction"> | number
    referenceId?: StringNullableWithAggregatesFilter<"OperatorTransaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"OperatorTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OperatorTransaction"> | Date | string
  }

  export type OperatorCreateInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenUncheckedCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundUncheckedCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUncheckedUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorCreateManyInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenCreateInput = {
    id?: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
    operator: OperatorCreateNestedOneWithoutTokensInput
  }

  export type ApiTokenUncheckedCreateInput = {
    id?: string
    operatorId: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
  }

  export type ApiTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutTokensNestedInput
  }

  export type ApiTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenCreateManyInput = {
    id?: string
    operatorId: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
  }

  export type ApiTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionCreateInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    operator: OperatorCreateNestedOneWithoutSessionsInput
    rounds?: GameRoundCreateNestedManyWithoutSessionInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    sessionId: string
    operatorId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    rounds?: GameRoundUncheckedCreateNestedManyWithoutSessionInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutSessionsNestedInput
    rounds?: GameRoundUpdateManyWithoutSessionNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: GameRoundUncheckedUpdateManyWithoutSessionNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: string
    sessionId: string
    operatorId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundCreateInput = {
    id?: string
    serialNumber: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
    session?: GameSessionCreateNestedOneWithoutRoundsInput
    operator: OperatorCreateNestedOneWithoutRoundsInput
  }

  export type GameRoundUncheckedCreateInput = {
    id?: string
    serialNumber: string
    sessionId?: string | null
    operatorId: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type GameRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameSessionUpdateOneWithoutRoundsNestedInput
    operator?: OperatorUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type GameRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundCreateManyInput = {
    id?: string
    serialNumber: string
    sessionId?: string | null
    operatorId: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type GameRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateInput = {
    id?: string
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
    operator: OperatorCreateNestedOneWithoutWebhookLogsInput
    session?: GameSessionCreateNestedOneWithoutWebhookLogsInput
  }

  export type WebhookLogUncheckedCreateInput = {
    id?: string
    operatorId: string
    sessionId?: string | null
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type WebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutWebhookLogsNestedInput
    session?: GameSessionUpdateOneWithoutWebhookLogsNestedInput
  }

  export type WebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyInput = {
    id?: string
    operatorId: string
    sessionId?: string | null
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type WebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionCreateInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
    operator: OperatorCreateNestedOneWithoutTransactionsInput
  }

  export type OperatorTransactionUncheckedCreateInput = {
    id?: string
    operatorId: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type OperatorTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type OperatorTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionCreateManyInput = {
    id?: string
    operatorId: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type OperatorTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApiTokenListRelationFilter = {
    every?: ApiTokenWhereInput
    some?: ApiTokenWhereInput
    none?: ApiTokenWhereInput
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type GameRoundListRelationFilter = {
    every?: GameRoundWhereInput
    some?: GameRoundWhereInput
    none?: GameRoundWhereInput
  }

  export type OperatorTransactionListRelationFilter = {
    every?: OperatorTransactionWhereInput
    some?: OperatorTransactionWhereInput
    none?: OperatorTransactionWhereInput
  }

  export type WebhookLogListRelationFilter = {
    every?: WebhookLogWhereInput
    some?: WebhookLogWhereInput
    none?: WebhookLogWhereInput
  }

  export type ApiTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatorTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatorCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    ggrRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatorAvgOrderByAggregateInput = {
    balance?: SortOrder
    ggrRate?: SortOrder
  }

  export type OperatorMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    ggrRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatorMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    ggrRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperatorSumOrderByAggregateInput = {
    balance?: SortOrder
    ggrRate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OperatorRelationFilter = {
    is?: OperatorWhereInput
    isNot?: OperatorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiTokenCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    token?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
    isLive?: SortOrder
    ipWhitelist?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    token?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
    isLive?: SortOrder
    ipWhitelist?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiTokenMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    token?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
    isLive?: SortOrder
    ipWhitelist?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    callbackUrl?: SortOrder
    returnUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    callbackUrl?: SortOrder
    returnUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    callbackUrl?: SortOrder
    returnUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type GameSessionNullableRelationFilter = {
    is?: GameSessionWhereInput | null
    isNot?: GameSessionWhereInput | null
  }

  export type GameRoundCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    gameName?: SortOrder
    gameRound?: SortOrder
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRoundAvgOrderByAggregateInput = {
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
  }

  export type GameRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    gameName?: SortOrder
    gameRound?: SortOrder
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRoundMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    sessionId?: SortOrder
    operatorId?: SortOrder
    userId?: SortOrder
    gameUid?: SortOrder
    gameName?: SortOrder
    gameRound?: SortOrder
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRoundSumOrderByAggregateInput = {
    betAmount?: SortOrder
    winAmount?: SortOrder
    creditAmount?: SortOrder
    ggrFeeDeducted?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    sessionId?: SortOrder
    serialNumber?: SortOrder
    targetUrl?: SortOrder
    payload?: SortOrder
    responseCode?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogAvgOrderByAggregateInput = {
    responseCode?: SortOrder
    attempts?: SortOrder
  }

  export type WebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    sessionId?: SortOrder
    serialNumber?: SortOrder
    targetUrl?: SortOrder
    payload?: SortOrder
    responseCode?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    sessionId?: SortOrder
    serialNumber?: SortOrder
    targetUrl?: SortOrder
    payload?: SortOrder
    responseCode?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookLogSumOrderByAggregateInput = {
    responseCode?: SortOrder
    attempts?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OperatorTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type OperatorTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type OperatorTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type OperatorTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    operatorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type OperatorTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type ApiTokenCreateNestedManyWithoutOperatorInput = {
    create?: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput> | ApiTokenCreateWithoutOperatorInput[] | ApiTokenUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutOperatorInput | ApiTokenCreateOrConnectWithoutOperatorInput[]
    createMany?: ApiTokenCreateManyOperatorInputEnvelope
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutOperatorInput = {
    create?: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput> | GameSessionCreateWithoutOperatorInput[] | GameSessionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutOperatorInput | GameSessionCreateOrConnectWithoutOperatorInput[]
    createMany?: GameSessionCreateManyOperatorInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameRoundCreateNestedManyWithoutOperatorInput = {
    create?: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput> | GameRoundCreateWithoutOperatorInput[] | GameRoundUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutOperatorInput | GameRoundCreateOrConnectWithoutOperatorInput[]
    createMany?: GameRoundCreateManyOperatorInputEnvelope
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
  }

  export type OperatorTransactionCreateNestedManyWithoutOperatorInput = {
    create?: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput> | OperatorTransactionCreateWithoutOperatorInput[] | OperatorTransactionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: OperatorTransactionCreateOrConnectWithoutOperatorInput | OperatorTransactionCreateOrConnectWithoutOperatorInput[]
    createMany?: OperatorTransactionCreateManyOperatorInputEnvelope
    connect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
  }

  export type WebhookLogCreateNestedManyWithoutOperatorInput = {
    create?: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput> | WebhookLogCreateWithoutOperatorInput[] | WebhookLogUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutOperatorInput | WebhookLogCreateOrConnectWithoutOperatorInput[]
    createMany?: WebhookLogCreateManyOperatorInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type ApiTokenUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput> | ApiTokenCreateWithoutOperatorInput[] | ApiTokenUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutOperatorInput | ApiTokenCreateOrConnectWithoutOperatorInput[]
    createMany?: ApiTokenCreateManyOperatorInputEnvelope
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput> | GameSessionCreateWithoutOperatorInput[] | GameSessionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutOperatorInput | GameSessionCreateOrConnectWithoutOperatorInput[]
    createMany?: GameSessionCreateManyOperatorInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameRoundUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput> | GameRoundCreateWithoutOperatorInput[] | GameRoundUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutOperatorInput | GameRoundCreateOrConnectWithoutOperatorInput[]
    createMany?: GameRoundCreateManyOperatorInputEnvelope
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
  }

  export type OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput> | OperatorTransactionCreateWithoutOperatorInput[] | OperatorTransactionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: OperatorTransactionCreateOrConnectWithoutOperatorInput | OperatorTransactionCreateOrConnectWithoutOperatorInput[]
    createMany?: OperatorTransactionCreateManyOperatorInputEnvelope
    connect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
  }

  export type WebhookLogUncheckedCreateNestedManyWithoutOperatorInput = {
    create?: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput> | WebhookLogCreateWithoutOperatorInput[] | WebhookLogUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutOperatorInput | WebhookLogCreateOrConnectWithoutOperatorInput[]
    createMany?: WebhookLogCreateManyOperatorInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApiTokenUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput> | ApiTokenCreateWithoutOperatorInput[] | ApiTokenUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutOperatorInput | ApiTokenCreateOrConnectWithoutOperatorInput[]
    upsert?: ApiTokenUpsertWithWhereUniqueWithoutOperatorInput | ApiTokenUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: ApiTokenCreateManyOperatorInputEnvelope
    set?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    disconnect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    delete?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    update?: ApiTokenUpdateWithWhereUniqueWithoutOperatorInput | ApiTokenUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: ApiTokenUpdateManyWithWhereWithoutOperatorInput | ApiTokenUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput> | GameSessionCreateWithoutOperatorInput[] | GameSessionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutOperatorInput | GameSessionCreateOrConnectWithoutOperatorInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutOperatorInput | GameSessionUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: GameSessionCreateManyOperatorInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutOperatorInput | GameSessionUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutOperatorInput | GameSessionUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameRoundUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput> | GameRoundCreateWithoutOperatorInput[] | GameRoundUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutOperatorInput | GameRoundCreateOrConnectWithoutOperatorInput[]
    upsert?: GameRoundUpsertWithWhereUniqueWithoutOperatorInput | GameRoundUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: GameRoundCreateManyOperatorInputEnvelope
    set?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    disconnect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    delete?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    update?: GameRoundUpdateWithWhereUniqueWithoutOperatorInput | GameRoundUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: GameRoundUpdateManyWithWhereWithoutOperatorInput | GameRoundUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
  }

  export type OperatorTransactionUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput> | OperatorTransactionCreateWithoutOperatorInput[] | OperatorTransactionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: OperatorTransactionCreateOrConnectWithoutOperatorInput | OperatorTransactionCreateOrConnectWithoutOperatorInput[]
    upsert?: OperatorTransactionUpsertWithWhereUniqueWithoutOperatorInput | OperatorTransactionUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: OperatorTransactionCreateManyOperatorInputEnvelope
    set?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    disconnect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    delete?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    connect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    update?: OperatorTransactionUpdateWithWhereUniqueWithoutOperatorInput | OperatorTransactionUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: OperatorTransactionUpdateManyWithWhereWithoutOperatorInput | OperatorTransactionUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: OperatorTransactionScalarWhereInput | OperatorTransactionScalarWhereInput[]
  }

  export type WebhookLogUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput> | WebhookLogCreateWithoutOperatorInput[] | WebhookLogUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutOperatorInput | WebhookLogCreateOrConnectWithoutOperatorInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutOperatorInput | WebhookLogUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: WebhookLogCreateManyOperatorInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutOperatorInput | WebhookLogUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutOperatorInput | WebhookLogUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput> | ApiTokenCreateWithoutOperatorInput[] | ApiTokenUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: ApiTokenCreateOrConnectWithoutOperatorInput | ApiTokenCreateOrConnectWithoutOperatorInput[]
    upsert?: ApiTokenUpsertWithWhereUniqueWithoutOperatorInput | ApiTokenUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: ApiTokenCreateManyOperatorInputEnvelope
    set?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    disconnect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    delete?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    connect?: ApiTokenWhereUniqueInput | ApiTokenWhereUniqueInput[]
    update?: ApiTokenUpdateWithWhereUniqueWithoutOperatorInput | ApiTokenUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: ApiTokenUpdateManyWithWhereWithoutOperatorInput | ApiTokenUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput> | GameSessionCreateWithoutOperatorInput[] | GameSessionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutOperatorInput | GameSessionCreateOrConnectWithoutOperatorInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutOperatorInput | GameSessionUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: GameSessionCreateManyOperatorInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutOperatorInput | GameSessionUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutOperatorInput | GameSessionUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameRoundUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput> | GameRoundCreateWithoutOperatorInput[] | GameRoundUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutOperatorInput | GameRoundCreateOrConnectWithoutOperatorInput[]
    upsert?: GameRoundUpsertWithWhereUniqueWithoutOperatorInput | GameRoundUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: GameRoundCreateManyOperatorInputEnvelope
    set?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    disconnect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    delete?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    update?: GameRoundUpdateWithWhereUniqueWithoutOperatorInput | GameRoundUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: GameRoundUpdateManyWithWhereWithoutOperatorInput | GameRoundUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
  }

  export type OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput> | OperatorTransactionCreateWithoutOperatorInput[] | OperatorTransactionUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: OperatorTransactionCreateOrConnectWithoutOperatorInput | OperatorTransactionCreateOrConnectWithoutOperatorInput[]
    upsert?: OperatorTransactionUpsertWithWhereUniqueWithoutOperatorInput | OperatorTransactionUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: OperatorTransactionCreateManyOperatorInputEnvelope
    set?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    disconnect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    delete?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    connect?: OperatorTransactionWhereUniqueInput | OperatorTransactionWhereUniqueInput[]
    update?: OperatorTransactionUpdateWithWhereUniqueWithoutOperatorInput | OperatorTransactionUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: OperatorTransactionUpdateManyWithWhereWithoutOperatorInput | OperatorTransactionUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: OperatorTransactionScalarWhereInput | OperatorTransactionScalarWhereInput[]
  }

  export type WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput> | WebhookLogCreateWithoutOperatorInput[] | WebhookLogUncheckedCreateWithoutOperatorInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutOperatorInput | WebhookLogCreateOrConnectWithoutOperatorInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutOperatorInput | WebhookLogUpsertWithWhereUniqueWithoutOperatorInput[]
    createMany?: WebhookLogCreateManyOperatorInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutOperatorInput | WebhookLogUpdateWithWhereUniqueWithoutOperatorInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutOperatorInput | WebhookLogUpdateManyWithWhereWithoutOperatorInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type OperatorCreateNestedOneWithoutTokensInput = {
    create?: XOR<OperatorCreateWithoutTokensInput, OperatorUncheckedCreateWithoutTokensInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutTokensInput
    connect?: OperatorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OperatorUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<OperatorCreateWithoutTokensInput, OperatorUncheckedCreateWithoutTokensInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutTokensInput
    upsert?: OperatorUpsertWithoutTokensInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutTokensInput, OperatorUpdateWithoutTokensInput>, OperatorUncheckedUpdateWithoutTokensInput>
  }

  export type OperatorCreateNestedOneWithoutSessionsInput = {
    create?: XOR<OperatorCreateWithoutSessionsInput, OperatorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutSessionsInput
    connect?: OperatorWhereUniqueInput
  }

  export type GameRoundCreateNestedManyWithoutSessionInput = {
    create?: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput> | GameRoundCreateWithoutSessionInput[] | GameRoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutSessionInput | GameRoundCreateOrConnectWithoutSessionInput[]
    createMany?: GameRoundCreateManySessionInputEnvelope
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
  }

  export type WebhookLogCreateNestedManyWithoutSessionInput = {
    create?: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput> | WebhookLogCreateWithoutSessionInput[] | WebhookLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutSessionInput | WebhookLogCreateOrConnectWithoutSessionInput[]
    createMany?: WebhookLogCreateManySessionInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type GameRoundUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput> | GameRoundCreateWithoutSessionInput[] | GameRoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutSessionInput | GameRoundCreateOrConnectWithoutSessionInput[]
    createMany?: GameRoundCreateManySessionInputEnvelope
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
  }

  export type WebhookLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput> | WebhookLogCreateWithoutSessionInput[] | WebhookLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutSessionInput | WebhookLogCreateOrConnectWithoutSessionInput[]
    createMany?: WebhookLogCreateManySessionInputEnvelope
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
  }

  export type OperatorUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<OperatorCreateWithoutSessionsInput, OperatorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutSessionsInput
    upsert?: OperatorUpsertWithoutSessionsInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutSessionsInput, OperatorUpdateWithoutSessionsInput>, OperatorUncheckedUpdateWithoutSessionsInput>
  }

  export type GameRoundUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput> | GameRoundCreateWithoutSessionInput[] | GameRoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutSessionInput | GameRoundCreateOrConnectWithoutSessionInput[]
    upsert?: GameRoundUpsertWithWhereUniqueWithoutSessionInput | GameRoundUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GameRoundCreateManySessionInputEnvelope
    set?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    disconnect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    delete?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    update?: GameRoundUpdateWithWhereUniqueWithoutSessionInput | GameRoundUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GameRoundUpdateManyWithWhereWithoutSessionInput | GameRoundUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
  }

  export type WebhookLogUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput> | WebhookLogCreateWithoutSessionInput[] | WebhookLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutSessionInput | WebhookLogCreateOrConnectWithoutSessionInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutSessionInput | WebhookLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WebhookLogCreateManySessionInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutSessionInput | WebhookLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutSessionInput | WebhookLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type GameRoundUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput> | GameRoundCreateWithoutSessionInput[] | GameRoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameRoundCreateOrConnectWithoutSessionInput | GameRoundCreateOrConnectWithoutSessionInput[]
    upsert?: GameRoundUpsertWithWhereUniqueWithoutSessionInput | GameRoundUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GameRoundCreateManySessionInputEnvelope
    set?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    disconnect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    delete?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    connect?: GameRoundWhereUniqueInput | GameRoundWhereUniqueInput[]
    update?: GameRoundUpdateWithWhereUniqueWithoutSessionInput | GameRoundUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GameRoundUpdateManyWithWhereWithoutSessionInput | GameRoundUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
  }

  export type WebhookLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput> | WebhookLogCreateWithoutSessionInput[] | WebhookLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WebhookLogCreateOrConnectWithoutSessionInput | WebhookLogCreateOrConnectWithoutSessionInput[]
    upsert?: WebhookLogUpsertWithWhereUniqueWithoutSessionInput | WebhookLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WebhookLogCreateManySessionInputEnvelope
    set?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    disconnect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    delete?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    connect?: WebhookLogWhereUniqueInput | WebhookLogWhereUniqueInput[]
    update?: WebhookLogUpdateWithWhereUniqueWithoutSessionInput | WebhookLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WebhookLogUpdateManyWithWhereWithoutSessionInput | WebhookLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
  }

  export type GameSessionCreateNestedOneWithoutRoundsInput = {
    create?: XOR<GameSessionCreateWithoutRoundsInput, GameSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutRoundsInput
    connect?: GameSessionWhereUniqueInput
  }

  export type OperatorCreateNestedOneWithoutRoundsInput = {
    create?: XOR<OperatorCreateWithoutRoundsInput, OperatorUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutRoundsInput
    connect?: OperatorWhereUniqueInput
  }

  export type GameSessionUpdateOneWithoutRoundsNestedInput = {
    create?: XOR<GameSessionCreateWithoutRoundsInput, GameSessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutRoundsInput
    upsert?: GameSessionUpsertWithoutRoundsInput
    disconnect?: GameSessionWhereInput | boolean
    delete?: GameSessionWhereInput | boolean
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutRoundsInput, GameSessionUpdateWithoutRoundsInput>, GameSessionUncheckedUpdateWithoutRoundsInput>
  }

  export type OperatorUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<OperatorCreateWithoutRoundsInput, OperatorUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutRoundsInput
    upsert?: OperatorUpsertWithoutRoundsInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutRoundsInput, OperatorUpdateWithoutRoundsInput>, OperatorUncheckedUpdateWithoutRoundsInput>
  }

  export type OperatorCreateNestedOneWithoutWebhookLogsInput = {
    create?: XOR<OperatorCreateWithoutWebhookLogsInput, OperatorUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutWebhookLogsInput
    connect?: OperatorWhereUniqueInput
  }

  export type GameSessionCreateNestedOneWithoutWebhookLogsInput = {
    create?: XOR<GameSessionCreateWithoutWebhookLogsInput, GameSessionUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutWebhookLogsInput
    connect?: GameSessionWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OperatorUpdateOneRequiredWithoutWebhookLogsNestedInput = {
    create?: XOR<OperatorCreateWithoutWebhookLogsInput, OperatorUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutWebhookLogsInput
    upsert?: OperatorUpsertWithoutWebhookLogsInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutWebhookLogsInput, OperatorUpdateWithoutWebhookLogsInput>, OperatorUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type GameSessionUpdateOneWithoutWebhookLogsNestedInput = {
    create?: XOR<GameSessionCreateWithoutWebhookLogsInput, GameSessionUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutWebhookLogsInput
    upsert?: GameSessionUpsertWithoutWebhookLogsInput
    disconnect?: GameSessionWhereInput | boolean
    delete?: GameSessionWhereInput | boolean
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutWebhookLogsInput, GameSessionUpdateWithoutWebhookLogsInput>, GameSessionUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type OperatorCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OperatorCreateWithoutTransactionsInput, OperatorUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutTransactionsInput
    connect?: OperatorWhereUniqueInput
  }

  export type OperatorUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<OperatorCreateWithoutTransactionsInput, OperatorUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OperatorCreateOrConnectWithoutTransactionsInput
    upsert?: OperatorUpsertWithoutTransactionsInput
    connect?: OperatorWhereUniqueInput
    update?: XOR<XOR<OperatorUpdateToOneWithWhereWithoutTransactionsInput, OperatorUpdateWithoutTransactionsInput>, OperatorUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ApiTokenCreateWithoutOperatorInput = {
    id?: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
  }

  export type ApiTokenUncheckedCreateWithoutOperatorInput = {
    id?: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
  }

  export type ApiTokenCreateOrConnectWithoutOperatorInput = {
    where: ApiTokenWhereUniqueInput
    create: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput>
  }

  export type ApiTokenCreateManyOperatorInputEnvelope = {
    data: ApiTokenCreateManyOperatorInput | ApiTokenCreateManyOperatorInput[]
  }

  export type GameSessionCreateWithoutOperatorInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    rounds?: GameRoundCreateNestedManyWithoutSessionInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateWithoutOperatorInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    rounds?: GameRoundUncheckedCreateNestedManyWithoutSessionInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionCreateOrConnectWithoutOperatorInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput>
  }

  export type GameSessionCreateManyOperatorInputEnvelope = {
    data: GameSessionCreateManyOperatorInput | GameSessionCreateManyOperatorInput[]
  }

  export type GameRoundCreateWithoutOperatorInput = {
    id?: string
    serialNumber: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
    session?: GameSessionCreateNestedOneWithoutRoundsInput
  }

  export type GameRoundUncheckedCreateWithoutOperatorInput = {
    id?: string
    serialNumber: string
    sessionId?: string | null
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type GameRoundCreateOrConnectWithoutOperatorInput = {
    where: GameRoundWhereUniqueInput
    create: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput>
  }

  export type GameRoundCreateManyOperatorInputEnvelope = {
    data: GameRoundCreateManyOperatorInput | GameRoundCreateManyOperatorInput[]
  }

  export type OperatorTransactionCreateWithoutOperatorInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type OperatorTransactionUncheckedCreateWithoutOperatorInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type OperatorTransactionCreateOrConnectWithoutOperatorInput = {
    where: OperatorTransactionWhereUniqueInput
    create: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput>
  }

  export type OperatorTransactionCreateManyOperatorInputEnvelope = {
    data: OperatorTransactionCreateManyOperatorInput | OperatorTransactionCreateManyOperatorInput[]
  }

  export type WebhookLogCreateWithoutOperatorInput = {
    id?: string
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
    session?: GameSessionCreateNestedOneWithoutWebhookLogsInput
  }

  export type WebhookLogUncheckedCreateWithoutOperatorInput = {
    id?: string
    sessionId?: string | null
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type WebhookLogCreateOrConnectWithoutOperatorInput = {
    where: WebhookLogWhereUniqueInput
    create: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput>
  }

  export type WebhookLogCreateManyOperatorInputEnvelope = {
    data: WebhookLogCreateManyOperatorInput | WebhookLogCreateManyOperatorInput[]
  }

  export type ApiTokenUpsertWithWhereUniqueWithoutOperatorInput = {
    where: ApiTokenWhereUniqueInput
    update: XOR<ApiTokenUpdateWithoutOperatorInput, ApiTokenUncheckedUpdateWithoutOperatorInput>
    create: XOR<ApiTokenCreateWithoutOperatorInput, ApiTokenUncheckedCreateWithoutOperatorInput>
  }

  export type ApiTokenUpdateWithWhereUniqueWithoutOperatorInput = {
    where: ApiTokenWhereUniqueInput
    data: XOR<ApiTokenUpdateWithoutOperatorInput, ApiTokenUncheckedUpdateWithoutOperatorInput>
  }

  export type ApiTokenUpdateManyWithWhereWithoutOperatorInput = {
    where: ApiTokenScalarWhereInput
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyWithoutOperatorInput>
  }

  export type ApiTokenScalarWhereInput = {
    AND?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
    OR?: ApiTokenScalarWhereInput[]
    NOT?: ApiTokenScalarWhereInput | ApiTokenScalarWhereInput[]
    id?: StringFilter<"ApiToken"> | string
    operatorId?: StringFilter<"ApiToken"> | string
    token?: StringFilter<"ApiToken"> | string
    secretKey?: StringFilter<"ApiToken"> | string
    name?: StringFilter<"ApiToken"> | string
    isLive?: BoolFilter<"ApiToken"> | boolean
    ipWhitelist?: StringNullableFilter<"ApiToken"> | string | null
    createdAt?: DateTimeFilter<"ApiToken"> | Date | string
  }

  export type GameSessionUpsertWithWhereUniqueWithoutOperatorInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutOperatorInput, GameSessionUncheckedUpdateWithoutOperatorInput>
    create: XOR<GameSessionCreateWithoutOperatorInput, GameSessionUncheckedCreateWithoutOperatorInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutOperatorInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutOperatorInput, GameSessionUncheckedUpdateWithoutOperatorInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutOperatorInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutOperatorInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: StringFilter<"GameSession"> | string
    sessionId?: StringFilter<"GameSession"> | string
    operatorId?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    gameUid?: StringFilter<"GameSession"> | string
    balance?: FloatFilter<"GameSession"> | number
    currency?: StringFilter<"GameSession"> | string
    callbackUrl?: StringFilter<"GameSession"> | string
    returnUrl?: StringFilter<"GameSession"> | string
    status?: StringFilter<"GameSession"> | string
    createdAt?: DateTimeFilter<"GameSession"> | Date | string
    expiresAt?: DateTimeFilter<"GameSession"> | Date | string
  }

  export type GameRoundUpsertWithWhereUniqueWithoutOperatorInput = {
    where: GameRoundWhereUniqueInput
    update: XOR<GameRoundUpdateWithoutOperatorInput, GameRoundUncheckedUpdateWithoutOperatorInput>
    create: XOR<GameRoundCreateWithoutOperatorInput, GameRoundUncheckedCreateWithoutOperatorInput>
  }

  export type GameRoundUpdateWithWhereUniqueWithoutOperatorInput = {
    where: GameRoundWhereUniqueInput
    data: XOR<GameRoundUpdateWithoutOperatorInput, GameRoundUncheckedUpdateWithoutOperatorInput>
  }

  export type GameRoundUpdateManyWithWhereWithoutOperatorInput = {
    where: GameRoundScalarWhereInput
    data: XOR<GameRoundUpdateManyMutationInput, GameRoundUncheckedUpdateManyWithoutOperatorInput>
  }

  export type GameRoundScalarWhereInput = {
    AND?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
    OR?: GameRoundScalarWhereInput[]
    NOT?: GameRoundScalarWhereInput | GameRoundScalarWhereInput[]
    id?: StringFilter<"GameRound"> | string
    serialNumber?: StringFilter<"GameRound"> | string
    sessionId?: StringNullableFilter<"GameRound"> | string | null
    operatorId?: StringFilter<"GameRound"> | string
    userId?: StringFilter<"GameRound"> | string
    gameUid?: StringFilter<"GameRound"> | string
    gameName?: StringFilter<"GameRound"> | string
    gameRound?: StringNullableFilter<"GameRound"> | string | null
    betAmount?: FloatFilter<"GameRound"> | number
    winAmount?: FloatFilter<"GameRound"> | number
    creditAmount?: FloatFilter<"GameRound"> | number
    ggrFeeDeducted?: FloatFilter<"GameRound"> | number
    rawPayload?: StringNullableFilter<"GameRound"> | string | null
    createdAt?: DateTimeFilter<"GameRound"> | Date | string
  }

  export type OperatorTransactionUpsertWithWhereUniqueWithoutOperatorInput = {
    where: OperatorTransactionWhereUniqueInput
    update: XOR<OperatorTransactionUpdateWithoutOperatorInput, OperatorTransactionUncheckedUpdateWithoutOperatorInput>
    create: XOR<OperatorTransactionCreateWithoutOperatorInput, OperatorTransactionUncheckedCreateWithoutOperatorInput>
  }

  export type OperatorTransactionUpdateWithWhereUniqueWithoutOperatorInput = {
    where: OperatorTransactionWhereUniqueInput
    data: XOR<OperatorTransactionUpdateWithoutOperatorInput, OperatorTransactionUncheckedUpdateWithoutOperatorInput>
  }

  export type OperatorTransactionUpdateManyWithWhereWithoutOperatorInput = {
    where: OperatorTransactionScalarWhereInput
    data: XOR<OperatorTransactionUpdateManyMutationInput, OperatorTransactionUncheckedUpdateManyWithoutOperatorInput>
  }

  export type OperatorTransactionScalarWhereInput = {
    AND?: OperatorTransactionScalarWhereInput | OperatorTransactionScalarWhereInput[]
    OR?: OperatorTransactionScalarWhereInput[]
    NOT?: OperatorTransactionScalarWhereInput | OperatorTransactionScalarWhereInput[]
    id?: StringFilter<"OperatorTransaction"> | string
    operatorId?: StringFilter<"OperatorTransaction"> | string
    type?: StringFilter<"OperatorTransaction"> | string
    amount?: FloatFilter<"OperatorTransaction"> | number
    balanceAfter?: FloatFilter<"OperatorTransaction"> | number
    referenceId?: StringNullableFilter<"OperatorTransaction"> | string | null
    description?: StringNullableFilter<"OperatorTransaction"> | string | null
    createdAt?: DateTimeFilter<"OperatorTransaction"> | Date | string
  }

  export type WebhookLogUpsertWithWhereUniqueWithoutOperatorInput = {
    where: WebhookLogWhereUniqueInput
    update: XOR<WebhookLogUpdateWithoutOperatorInput, WebhookLogUncheckedUpdateWithoutOperatorInput>
    create: XOR<WebhookLogCreateWithoutOperatorInput, WebhookLogUncheckedCreateWithoutOperatorInput>
  }

  export type WebhookLogUpdateWithWhereUniqueWithoutOperatorInput = {
    where: WebhookLogWhereUniqueInput
    data: XOR<WebhookLogUpdateWithoutOperatorInput, WebhookLogUncheckedUpdateWithoutOperatorInput>
  }

  export type WebhookLogUpdateManyWithWhereWithoutOperatorInput = {
    where: WebhookLogScalarWhereInput
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyWithoutOperatorInput>
  }

  export type WebhookLogScalarWhereInput = {
    AND?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    OR?: WebhookLogScalarWhereInput[]
    NOT?: WebhookLogScalarWhereInput | WebhookLogScalarWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    operatorId?: StringFilter<"WebhookLog"> | string
    sessionId?: StringNullableFilter<"WebhookLog"> | string | null
    serialNumber?: StringFilter<"WebhookLog"> | string
    targetUrl?: StringFilter<"WebhookLog"> | string
    payload?: StringFilter<"WebhookLog"> | string
    responseCode?: IntNullableFilter<"WebhookLog"> | number | null
    responseBody?: StringNullableFilter<"WebhookLog"> | string | null
    status?: StringFilter<"WebhookLog"> | string
    attempts?: IntFilter<"WebhookLog"> | number
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }

  export type OperatorCreateWithoutTokensInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: GameSessionCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutTokensInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: GameSessionUncheckedCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundUncheckedCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutTokensInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutTokensInput, OperatorUncheckedCreateWithoutTokensInput>
  }

  export type OperatorUpsertWithoutTokensInput = {
    update: XOR<OperatorUpdateWithoutTokensInput, OperatorUncheckedUpdateWithoutTokensInput>
    create: XOR<OperatorCreateWithoutTokensInput, OperatorUncheckedCreateWithoutTokensInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutTokensInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutTokensInput, OperatorUncheckedUpdateWithoutTokensInput>
  }

  export type OperatorUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: GameSessionUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: GameSessionUncheckedUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUncheckedUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorCreateWithoutSessionsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutSessionsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenUncheckedCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundUncheckedCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutSessionsInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutSessionsInput, OperatorUncheckedCreateWithoutSessionsInput>
  }

  export type GameRoundCreateWithoutSessionInput = {
    id?: string
    serialNumber: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
    operator: OperatorCreateNestedOneWithoutRoundsInput
  }

  export type GameRoundUncheckedCreateWithoutSessionInput = {
    id?: string
    serialNumber: string
    operatorId: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type GameRoundCreateOrConnectWithoutSessionInput = {
    where: GameRoundWhereUniqueInput
    create: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput>
  }

  export type GameRoundCreateManySessionInputEnvelope = {
    data: GameRoundCreateManySessionInput | GameRoundCreateManySessionInput[]
  }

  export type WebhookLogCreateWithoutSessionInput = {
    id?: string
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
    operator: OperatorCreateNestedOneWithoutWebhookLogsInput
  }

  export type WebhookLogUncheckedCreateWithoutSessionInput = {
    id?: string
    operatorId: string
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type WebhookLogCreateOrConnectWithoutSessionInput = {
    where: WebhookLogWhereUniqueInput
    create: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput>
  }

  export type WebhookLogCreateManySessionInputEnvelope = {
    data: WebhookLogCreateManySessionInput | WebhookLogCreateManySessionInput[]
  }

  export type OperatorUpsertWithoutSessionsInput = {
    update: XOR<OperatorUpdateWithoutSessionsInput, OperatorUncheckedUpdateWithoutSessionsInput>
    create: XOR<OperatorCreateWithoutSessionsInput, OperatorUncheckedCreateWithoutSessionsInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutSessionsInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutSessionsInput, OperatorUncheckedUpdateWithoutSessionsInput>
  }

  export type OperatorUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUncheckedUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type GameRoundUpsertWithWhereUniqueWithoutSessionInput = {
    where: GameRoundWhereUniqueInput
    update: XOR<GameRoundUpdateWithoutSessionInput, GameRoundUncheckedUpdateWithoutSessionInput>
    create: XOR<GameRoundCreateWithoutSessionInput, GameRoundUncheckedCreateWithoutSessionInput>
  }

  export type GameRoundUpdateWithWhereUniqueWithoutSessionInput = {
    where: GameRoundWhereUniqueInput
    data: XOR<GameRoundUpdateWithoutSessionInput, GameRoundUncheckedUpdateWithoutSessionInput>
  }

  export type GameRoundUpdateManyWithWhereWithoutSessionInput = {
    where: GameRoundScalarWhereInput
    data: XOR<GameRoundUpdateManyMutationInput, GameRoundUncheckedUpdateManyWithoutSessionInput>
  }

  export type WebhookLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: WebhookLogWhereUniqueInput
    update: XOR<WebhookLogUpdateWithoutSessionInput, WebhookLogUncheckedUpdateWithoutSessionInput>
    create: XOR<WebhookLogCreateWithoutSessionInput, WebhookLogUncheckedCreateWithoutSessionInput>
  }

  export type WebhookLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: WebhookLogWhereUniqueInput
    data: XOR<WebhookLogUpdateWithoutSessionInput, WebhookLogUncheckedUpdateWithoutSessionInput>
  }

  export type WebhookLogUpdateManyWithWhereWithoutSessionInput = {
    where: WebhookLogScalarWhereInput
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyWithoutSessionInput>
  }

  export type GameSessionCreateWithoutRoundsInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    operator: OperatorCreateNestedOneWithoutSessionsInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateWithoutRoundsInput = {
    id?: string
    sessionId: string
    operatorId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionCreateOrConnectWithoutRoundsInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutRoundsInput, GameSessionUncheckedCreateWithoutRoundsInput>
  }

  export type OperatorCreateWithoutRoundsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutRoundsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenUncheckedCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutRoundsInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutRoundsInput, OperatorUncheckedCreateWithoutRoundsInput>
  }

  export type GameSessionUpsertWithoutRoundsInput = {
    update: XOR<GameSessionUpdateWithoutRoundsInput, GameSessionUncheckedUpdateWithoutRoundsInput>
    create: XOR<GameSessionCreateWithoutRoundsInput, GameSessionUncheckedCreateWithoutRoundsInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutRoundsInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutRoundsInput, GameSessionUncheckedUpdateWithoutRoundsInput>
  }

  export type GameSessionUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutSessionsNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type OperatorUpsertWithoutRoundsInput = {
    update: XOR<OperatorUpdateWithoutRoundsInput, OperatorUncheckedUpdateWithoutRoundsInput>
    create: XOR<OperatorCreateWithoutRoundsInput, OperatorUncheckedCreateWithoutRoundsInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutRoundsInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutRoundsInput, OperatorUncheckedUpdateWithoutRoundsInput>
  }

  export type OperatorUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorCreateWithoutWebhookLogsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutWebhookLogsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenUncheckedCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundUncheckedCreateNestedManyWithoutOperatorInput
    transactions?: OperatorTransactionUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutWebhookLogsInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutWebhookLogsInput, OperatorUncheckedCreateWithoutWebhookLogsInput>
  }

  export type GameSessionCreateWithoutWebhookLogsInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    operator: OperatorCreateNestedOneWithoutSessionsInput
    rounds?: GameRoundCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateWithoutWebhookLogsInput = {
    id?: string
    sessionId: string
    operatorId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
    rounds?: GameRoundUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionCreateOrConnectWithoutWebhookLogsInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutWebhookLogsInput, GameSessionUncheckedCreateWithoutWebhookLogsInput>
  }

  export type OperatorUpsertWithoutWebhookLogsInput = {
    update: XOR<OperatorUpdateWithoutWebhookLogsInput, OperatorUncheckedUpdateWithoutWebhookLogsInput>
    create: XOR<OperatorCreateWithoutWebhookLogsInput, OperatorUncheckedCreateWithoutWebhookLogsInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutWebhookLogsInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutWebhookLogsInput, OperatorUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type OperatorUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUncheckedUpdateManyWithoutOperatorNestedInput
    transactions?: OperatorTransactionUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type GameSessionUpsertWithoutWebhookLogsInput = {
    update: XOR<GameSessionUpdateWithoutWebhookLogsInput, GameSessionUncheckedUpdateWithoutWebhookLogsInput>
    create: XOR<GameSessionCreateWithoutWebhookLogsInput, GameSessionUncheckedCreateWithoutWebhookLogsInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutWebhookLogsInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutWebhookLogsInput, GameSessionUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type GameSessionUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutSessionsNestedInput
    rounds?: GameRoundUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutWebhookLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: GameRoundUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type OperatorCreateWithoutTransactionsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogCreateNestedManyWithoutOperatorInput
  }

  export type OperatorUncheckedCreateWithoutTransactionsInput = {
    id?: string
    companyName: string
    email: string
    passwordHash: string
    balance?: number
    currency?: string
    ggrRate?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: ApiTokenUncheckedCreateNestedManyWithoutOperatorInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutOperatorInput
    rounds?: GameRoundUncheckedCreateNestedManyWithoutOperatorInput
    webhookLogs?: WebhookLogUncheckedCreateNestedManyWithoutOperatorInput
  }

  export type OperatorCreateOrConnectWithoutTransactionsInput = {
    where: OperatorWhereUniqueInput
    create: XOR<OperatorCreateWithoutTransactionsInput, OperatorUncheckedCreateWithoutTransactionsInput>
  }

  export type OperatorUpsertWithoutTransactionsInput = {
    update: XOR<OperatorUpdateWithoutTransactionsInput, OperatorUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OperatorCreateWithoutTransactionsInput, OperatorUncheckedCreateWithoutTransactionsInput>
    where?: OperatorWhereInput
  }

  export type OperatorUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OperatorWhereInput
    data: XOR<OperatorUpdateWithoutTransactionsInput, OperatorUncheckedUpdateWithoutTransactionsInput>
  }

  export type OperatorUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutOperatorNestedInput
  }

  export type OperatorUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    ggrRate?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: ApiTokenUncheckedUpdateManyWithoutOperatorNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutOperatorNestedInput
    rounds?: GameRoundUncheckedUpdateManyWithoutOperatorNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutOperatorNestedInput
  }

  export type ApiTokenCreateManyOperatorInput = {
    id?: string
    token: string
    secretKey: string
    name?: string
    isLive?: boolean
    ipWhitelist?: string | null
    createdAt?: Date | string
  }

  export type GameSessionCreateManyOperatorInput = {
    id?: string
    sessionId: string
    userId: string
    gameUid: string
    balance: number
    currency?: string
    callbackUrl: string
    returnUrl: string
    status?: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type GameRoundCreateManyOperatorInput = {
    id?: string
    serialNumber: string
    sessionId?: string | null
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type OperatorTransactionCreateManyOperatorInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type WebhookLogCreateManyOperatorInput = {
    id?: string
    sessionId?: string | null
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type ApiTokenUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    secretKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    ipWhitelist?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: GameRoundUpdateManyWithoutSessionNestedInput
    webhookLogs?: WebhookLogUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: GameRoundUncheckedUpdateManyWithoutSessionNestedInput
    webhookLogs?: WebhookLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    returnUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameSessionUpdateOneWithoutRoundsNestedInput
  }

  export type GameRoundUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorTransactionUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    balanceAfter?: FloatFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: GameSessionUpdateOneWithoutWebhookLogsNestedInput
  }

  export type WebhookLogUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundCreateManySessionInput = {
    id?: string
    serialNumber: string
    operatorId: string
    userId: string
    gameUid: string
    gameName: string
    gameRound?: string | null
    betAmount: number
    winAmount: number
    creditAmount: number
    ggrFeeDeducted?: number
    rawPayload?: string | null
    createdAt?: Date | string
  }

  export type WebhookLogCreateManySessionInput = {
    id?: string
    operatorId: string
    serialNumber: string
    targetUrl: string
    payload: string
    responseCode?: number | null
    responseBody?: string | null
    status?: string
    attempts?: number
    createdAt?: Date | string
  }

  export type GameRoundUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type GameRoundUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRoundUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameUid?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    gameRound?: NullableStringFieldUpdateOperationsInput | string | null
    betAmount?: FloatFieldUpdateOperationsInput | number
    winAmount?: FloatFieldUpdateOperationsInput | number
    creditAmount?: FloatFieldUpdateOperationsInput | number
    ggrFeeDeducted?: FloatFieldUpdateOperationsInput | number
    rawPayload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: OperatorUpdateOneRequiredWithoutWebhookLogsNestedInput
  }

  export type WebhookLogUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    operatorId?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OperatorCountOutputTypeDefaultArgs instead
     */
    export type OperatorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperatorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionCountOutputTypeDefaultArgs instead
     */
    export type GameSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperatorDefaultArgs instead
     */
    export type OperatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperatorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiTokenDefaultArgs instead
     */
    export type ApiTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionDefaultArgs instead
     */
    export type GameSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameRoundDefaultArgs instead
     */
    export type GameRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameRoundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookLogDefaultArgs instead
     */
    export type WebhookLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperatorTransactionDefaultArgs instead
     */
    export type OperatorTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperatorTransactionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}