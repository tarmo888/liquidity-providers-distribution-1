exports.bServeAsHub = false;
exports.bLight = true;
exports.bSingleAddress = true;


exports.bIgnoreUnpairRequests = true;
exports.hub = process.env.testnet ? 'obyte.org/bb-test' : 'obyte.org/bb';
exports.assets_data_url = "http://cmc.papabyte.com/api/v1/assets";

exports.assets_keeper_aa = "5IMNF7SVQ6CZDSZNNX72LI3UCPYRHS43";
exports.token_registry_aa_address = process.env.testnet ? "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ" : "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ";

exports.first_distribution_datetime = "2020-10-05 11:45:00"; //UTC
exports.hoursBetweenDistributions = 1; // 7 * 24
exports.distribution_amount = process.env.testnet ? 10e6 : 100e9; // in bytes

exports.webServerPort = process.env.testnet ? 4031 : 4030;

exports.eligiblePools = process.env.testnet ? {

	HZCD3MDGCLU2G2IVYGGTMTZXS7DII2O5: {coeff: 50}, //OUSD-GBYTE
	G6BGN6PBZEABBWJF2I42XYHVDWI3E5KT: {coeff: 100} //GRAU-OUSD
} : 
{

};