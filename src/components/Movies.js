import React from 'react';
import styles from "./Movies.module.css"

const Movies = () => {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://www.themoviedb.org/t/p/original/aAngiE34BMFDTOXpjc04Lr8zsX1.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Fast X</h3>
                        <p className={styles.movies__date}>(2023)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://www.themoviedb.org/t/p/original/rS97hUJ1otKTTripGwQ0ujbuIri.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Antman</h3>
                        <p className={styles.movies__date}>(2015)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://assets-a1.kompasiana.com/items/album/2022/05/12/dsitmom-poster-ph-sg-id-f0f15716-627c848e8d947a1690147fe3.jpeg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Dr. Strange</h3>
                        <p className={styles.movies__date}>(2022)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://lzd-img-global.slatic.net/g/ff/kf/S0419dbe96a3d42c683dd3d35b121c778n.jpg_360x360q75.jpg_.webp"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Transformers</h3>
                        <p className={styles.movies__date}>(2017)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c41d00597bd85ab0703d87b26ddf3bb02d5e95c94ed6af9cbd82ca0abb43352b._RI_TTW_.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Pacific Rim</h3>
                        <p className={styles.movies__date}>(2013)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8443992_p_v12_ak.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Real Steel</h3>
                        <p className={styles.movies__date}>(2011)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/474x/e5/5a/33/e55a338a600fdcff3461c238c7289eb4.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>2012</h3>
                        <p className={styles.movies__date}>(2009)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://resizing.flixster.com/UUqZxgZsd3TdfDcKozMMOVNtmZM=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8777089_p_v8_an.jpg"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Battleship</h3>
                        <p className={styles.movies__date}>(2012)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Avengers</h3>
                        <p className={styles.movies__date}>(2019)</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://play-lh.googleusercontent.com/_1Ll-72tEUmj1h7Hiiwiws8jykbpoZW0mhs7ctcVpdSSGPeCLxKEo-kLB7RnzvgXx8Q"
                        alt=""
                        />
                        <h3 className={styles.movie__title}>Captain Marvel</h3>
                        <p className={styles.movies__date}>(2019)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;
