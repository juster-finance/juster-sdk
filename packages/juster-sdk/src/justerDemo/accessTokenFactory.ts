export type AccessTokenFactory<TokenType = string, EmptyType = undefined> =
    () => Promise<TokenType | EmptyType> | TokenType | EmptyType;
