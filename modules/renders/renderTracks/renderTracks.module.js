import { createNode } from '../functions/functions.module.js';
import { createTrackElement } from './createTrackElement.module.js';


export function renderTracks(inputTrackForRendering) {
	const targetTracks = inputTrackForRendering.tracks
	const fireImageSrc = inputTrackForRendering.playListInfo.fireSrc

	// trecks-wrapper
	let trecksWrapper = createNode('div', '', [])

	for (let i = 0; i < targetTracks.length; i++) {
		trecksWrapper.append(createTrackElement(targetTracks[i], fireImageSrc))
	}

	return trecksWrapper
}