module.exports = {
    index : async (req, res) => {
        await res.status(201).json({
            err: false,
            message: 'Welcome to Web Development !'
        });
    },
    default: async (req, res) => {
        await res.status(400).json({
            err: true,
            message: 'Error ~!',
        });
    }
}