const MIN_HEIGHT = 268,
	RELATIVE_HEIGHT_OF_CONTAINER = 0.7,
	RELATIVE_WIDTH_OF_TEMPLATE = 0.64;

let getTemplateSize = (containerHeight) => {
	let size = {
		width: 0,
		height: 0
	};

	if (containerHeight) {
		size.height = getHeight(containerHeight);
		size.width = getWidth(size.height);
	}

	return size;

	function getHeight(containerHeight) {
	    let height = containerHeight * RELATIVE_HEIGHT_OF_CONTAINER;
	    height = height < MIN_HEIGHT ? MIN_HEIGHT : height;

	    return height;
	}
	function getWidth(templateHeight) {
	    return templateHeight * RELATIVE_WIDTH_OF_TEMPLATE
	}
};

export default getTemplateSize
