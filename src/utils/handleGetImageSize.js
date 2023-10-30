const getImageSize = imageSize => target =>
	imageSize.find(item => item.device === target);

export { getImageSize };
