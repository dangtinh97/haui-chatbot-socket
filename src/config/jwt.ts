export default {
    secret:process.env.JWT_SECRET,
    ttl: process.env.JWT_TTL || 60*60*24
}