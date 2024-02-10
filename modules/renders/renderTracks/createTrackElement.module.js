import { createNode } from "../functions/functions.module.js"

export function createTrackElement(targetElement, fireSrc) {
	// treck-Element
	let treckElement = createNode('div', '', ['treckElement'])
	// trecksWrapper.append(treckElement)

	// image
	let treckTitleImage = createNode('img', '', ['treckTitleImage'], { src: targetElement.trackCoverImgUrl })
	treckElement.append(treckTitleImage)

	// treck-title-wrapper
	let treckTitleWrapperElement = createNode('div', '', ['treckTitleWrapperElement'], {})
	treckElement.append(treckTitleWrapperElement)

	// treck-Artist-Name
	let treckArtistNameElement = createNode('h3', targetElement.artistName + ' - ', [], {})
	treckArtistNameElement.style.marginBottom = '0.3rem'
	treckTitleWrapperElement.append(treckArtistNameElement)

	// treckTitle-Fire
	if (targetElement.isHit) {
		let isHitImage = createNode('img', '', [], { src: fireSrc })
		treckArtistNameElement.prepend(isHitImage)
	}
	// treck-Title
	let treckTitle = createNode('span', targetElement.trackTitle, ['grey', 'px14'], {})
	treckArtistNameElement.append(treckTitle)

	// audio - playerElement
	let playerElement = createNode('audio', '', ['audioPlayer'], { controls: true })
	treckTitleWrapperElement.append(playerElement)
	// source - playerElement
	let sourceElement = createNode('source', '', [], { src: targetElement.trackFileUrl, type: 'audio/mp3' })
	playerElement.append(sourceElement)

	return treckElement
}
