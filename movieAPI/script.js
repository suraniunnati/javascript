function movie() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTUzODZlZmY2ZGUwNWZkOGJjYWJiNDhmNDM2ZWUyZiIsIm5iZiI6MTcyODQ4MTA3OS45NDIxOTIsInN1YiI6IjY3MDY4NThhNDQyNjVjNDM1OTc4NDI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHI7Jjyzgtz-47az_kh2DRJBjdyWwmHrmbms9WgzqiE'
        }
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        document.getElementById("movie").innerHTML = view(res.results); 
    })
    .catch((err) => {
        console.log(err);
    });
}

function view(arr) {
    return arr.map((ele) => {
        return `
        <div id="main">
            <img src="https://image.tmdb.org/t/p/w92/${ele.poster_path}" alt="${ele.original_title}">
            <h3>${ele.original_title}</h3>
            <p>vote_average : ${ele.vote_average}</p>
            <p>release_date: ${ele.release_date}</p>
        </div>
        `;
    }).join(''); 
}

movie();