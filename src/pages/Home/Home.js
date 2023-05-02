import React from 'react'
import FeaturedDisplay from '../../components/FeaturedDisplay/FeaturedDisplay'
import './Home.css'

export default function Home() {
  return (
    <div className='Home-Page'>
      <div className='welcome-container'>
        <h1>Welcome to PokeDoké!</h1>
        <p className='welcome'>Where all your basic Pokemon information is just a click away. Explore the Pokemon page to find basic information about a Pokemon, by clicking on its name. If you see a Pokemon you would like more information about, search that pokemon by name on the search page.<br></br> Enjoy PokéDoké<br />

          In vel accumsan lorem. Duis porta semper pulvinar. Nam lectus sapien, vehicula quis bibendum ac, maximus in turpis. Sed risus urna, semper vitae neque et, rutrum tempus nisl. Donec libero mauris, porttitor et malesuada vitae, sagittis a turpis. Donec quis augue ut justo posuere rutrum quis et massa. Phasellus luctus felis a pellentesque dictum. Etiam vitae congue tortor. Sed lacinia tellus lacinia mi hendrerit sollicitudin. Donec at pulvinar nisl, sodales dapibus ante. Donec pulvinar lectus quis lorem venenatis elementum. Suspendisse elit magna, finibus a purus at, pulvinar mollis urna. Donec id mauris sodales, venenatis urna nec, hendrerit lectus. Phasellus at augue ex.
        </p>
      </div>
      <FeaturedDisplay />
    </div>
  )
}
