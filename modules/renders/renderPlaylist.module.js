import { createNode } from './functions/functions.module.js'
import { renderPlaylistHeader } from './renderPlaylistHeader/renderPlaylistHeader.module.js'
import { renderTracks } from './renderTracks/renderTracks.module.js'

export function renderPlaylist(playlistForRendering) {
	// wrapper playlist
	let playlistWrapper = createNode('div', '', ["playlistWrapper"], {})

	playlistWrapper.append(renderPlaylistHeader(playlistForRendering))
	playlistWrapper.append(renderTracks(playlistForRendering))

	return playlistWrapper
}
