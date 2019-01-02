const
	MIN_HEIGHT = 268,
	RELATIVE_HEIGHT_OF_CONTAINER = 0.7,
	RELATIVE_WIDTH_OF_TEMPLATE = 0.64;

let HEIGHT = 0, WIDTH = 0;

let getTemplateSize = containerHeight => {
	let size = {
		width: 0,
		height: 0
	};

	if (containerHeight || WIDTH || HEIGHT) {
		size.height = getHeight(containerHeight);
		size.width = getWidth(size.height);
	}

	return size;

	function getHeight(containerHeight) {
		if (HEIGHT) {
			return HEIGHT;
		}

	    HEIGHT = containerHeight * RELATIVE_HEIGHT_OF_CONTAINER;
		HEIGHT = HEIGHT < MIN_HEIGHT ? MIN_HEIGHT : HEIGHT;

	    return HEIGHT;
	}
	function getWidth(templateHeight) {
		if (WIDTH) {
			return WIDTH;
		}

		WIDTH = templateHeight * RELATIVE_WIDTH_OF_TEMPLATE;
	    return WIDTH;
	}
};

export default getTemplateSize
