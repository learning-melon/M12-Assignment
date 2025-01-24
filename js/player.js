document.addEventListener('DOMContentLoaded', function() {
    class Player {
        constructor(album) {
            this._albums = [];
        }
        addAlbum = function(album) {
            this._albums.push(album);
        }
        albumPlayedMost = function() {
            let max = -1;
            let playedMost;

            for (let i = 0; i < this._albums.length; i++) {
                if (this._albums[i]._played > max) {
                    max = this._albums[i]._played;
                    playedMost = this._albums[i];
                }
            }
            return playedMost.display();
        }
    }

    class Album {
        constructor(artist, title) {
            this._artist = artist;
            this._title = title;
            this._played = 0;
        }
        play = function() {
            this._played++;
            console.log(`${this._artist} : ${this._title} has been played ${this._played} times.`);
        }
        display = function() {
            return `${this._artist} : ${this._title} has been played the most. The album has been played ${this._played} times.`;
        }
    }

    const player = new Player();
    let albums = []
    let arrMusic = [
        ['Green Day', 'Dookie'],
        ['The Beatles', 'Sergeant Peppers'],
        ['Metallica', 'Ride The Lightning']
    ];

    let sel = document.getElementById('music')
    for(let i = 0; i < arrMusic.length; i++) {
        let opt = document.createElement('option')
        opt.value = i
        opt.innerHTML = `${arrMusic[i][0]} - ${arrMusic[i][1]}`
        sel.appendChild(opt)

        let album = new Album(arrMusic[i][0], arrMusic[i][1])
        albums.push(album)
        player.addAlbum(album)
    }

    document.getElementById('play').addEventListener('click', function(e) {
        let index = sel.value;
        albums[index].play()
    })

    document.getElementById('fav').addEventListener('click', function(e) {
        document.getElementById("favoriteAlbum").innerHTML = player.albumPlayedMost();
    })
})


