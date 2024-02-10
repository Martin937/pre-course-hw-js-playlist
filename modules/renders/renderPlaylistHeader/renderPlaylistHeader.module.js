import { createNode } from '../functions/functions.module.js';


export function renderPlaylistHeader(inputPlaylistForRendering) {
	let targetInfo = inputPlaylistForRendering.playListInfo
	let targetTracks = inputPlaylistForRendering.tracks
	let countTrecks = targetTracks.length
	let countTrecksDuration = 0
	let artistsName = ''
	for (let i = 0; i < countTrecks; i++) {
		countTrecksDuration += targetTracks[i].TrackDurationInSecs
		if (targetTracks[i] !== targetTracks[countTrecks - 1]) {
			artistsName += targetTracks[i].artistName + ', '
		} else {
			artistsName += targetTracks[i].artistName + ' '
		}
	}
	let countTrecksDurationInMinutes = `${+(countTrecksDuration / 60).toFixed()} min ${countTrecksDuration % 60} sec`
	// wrapper playlist-header
	let playlistHeaderWrapper = createNode('div', '', ["playlistHeaderWrapper"])
	// image
	let imageElement = createNode('img', '', [], { src: targetInfo.coverImgUrl })
	playlistHeaderWrapper.append(imageElement)
	// wrapper playlist-header-info
	let playlistInfoWrapper = createNode('div', '', [])
	playlistHeaderWrapper.append(playlistInfoWrapper)
	// name element
	let nameElement = createNode('span', 'Playlist', ['px14'])
	playlistInfoWrapper.append(nameElement)
	// title element
	let titleElement = createNode('h2', targetInfo.title, [])
	playlistInfoWrapper.append(titleElement)
	// counter element
	let counterElement = createNode('span', `${countTrecks} tracks ${countTrecksDurationInMinutes}`, ['px14', 'grey'])
	playlistInfoWrapper.append(counterElement)
	// artists name element
	let artistsNameElement = createNode('span', artistsName, [])
	let spanClassGrey = createNode('span', ' and others', ['grey',])
	artistsNameElement.append(spanClassGrey)
	playlistInfoWrapper.append(artistsNameElement)

	return playlistHeaderWrapper
}

