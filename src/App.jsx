import { useState } from 'react'
import { getMovieList, searcMovie, imgURL } from './api'
import { useEffect } from 'react'

const App = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  function PopularMovie() {
    return (
      <>
        <div className="container">
          <div className="row">
            {popularMovies.map((movie, i) => (
              <div className="col-lg-4 mb-2" key={i}>
                <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <img src={`${imgURL}/${movie.poster_path}`} className="card-img-top" />
                  <div className="card-body">
                    <h6 className="card-title text-center">{movie.title}</h6>
                    <small>Release : {movie.release_date}</small>
                    <p className="card-text fst-italic fw-bold">Rating : {movie.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }



  const search = async (q) => {
    const query = await searcMovie(q)
    setPopularMovies(query.results)
  }

  return (
    <>
      <div className="container col-5 my-5">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter Your Movie..." onChange={({ target }) => search(target.value)} />
        </div>
      </div>
      <PopularMovie />
    </>
  )
}

export default App
