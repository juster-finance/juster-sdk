export type AccessTokenFactory<TokenType = string, EmptyType = undefined | null> =
    () => Promise<TokenType | EmptyType> | TokenType | EmptyType;
