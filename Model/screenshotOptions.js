module.exports = function(bodyReq) {
	this.width = bodyReq.width;
	this.height = bodyReq.height;

	this.getOptions = () => {
		return {
			shotSize: {
        		width: this.width,
        		height: this.height
      		}
		};
	}
}