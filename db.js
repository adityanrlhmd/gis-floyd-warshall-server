const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		// mongoose.connect('mongodb://localhost:27017/gis', connectionParams);
		mongoose.connect(process.env.MYDB, connectionParams);
		console.log("Berhasil Konek Database");
	} catch (error) {
		console.log(error);
		console.log("Tidak Bisa Konek Database!");
	}
};
