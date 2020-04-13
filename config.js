module.exports = {
	endpoint: {
		base:
			"https://icp-console.apps.hcp.darumtech.net/idprovider/v1/auth/logout?login_url=https://console-openshift-console.apps.hcp.darumtech.net",
		others: [
			"https://123openshift-iam.cloudzcp.io/auth/realms/zcp/protocol/openid-connect/logout",
		],
	},
};
