const fetchVersion = () => {
    const {version} = JSON.parse(require("fs").readFileSync("package.json"))
    return version
}

const nextConfig = {
    // next config options
    env: {
        // DATABASE_USER: "user",
        APP_VERSION: fetchVersion(),
    },
    //runtime configs are not compatible with static optimization
    // serverRuntimeConfig: {
        
    // },
    // publicRuntimeConfig: {
    //     MY_SECRET: "my-secret-config"
    // },
    // redirects: async () => {
    //     return [
    //         {
    //             source: "/users/create",
    //             destination: "/",
    //             permanent: true,
    //         }
    //     ]
    // },
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "x-custom-key",
                        value: "customValue"
                    }
                ]
            }
        ]
    }
}


module.exports = nextConfig