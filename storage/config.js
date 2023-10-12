const env = {
    ssl: "http://",
    hostName: "127.0.0.1",
    port: "5070"
}

let url = `${env.ssl + env.hostName}:${env.port}`;

export default url;