export const parseUserData = ({ bearerToken, stylist }) =>
    Object.assign({}, { bearerToken }, stylist)