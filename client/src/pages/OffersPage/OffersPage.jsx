import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'
import { getOffers } from '../../store/slices/offersSlice'
import { connect } from 'react-redux'

function OffersPage({isFetching, error, offers, getOffers}) {
  useEffect(() => {
    getOffers()
  }, [])

  return (
    <>
      <Header />
      <div>
        {isFetching && <Spinner />}
        {error&&<>ERROR!!!</>}
        {!isFetching && !error && <div>{JSON.stringify(offers)}</div>}
      </div>
      <div></div>
      <Footer />
    </>
  )
}

const mapStateToProps = state => state.offersList

const mapDispatchToProps = dispatch => ({
  getOffers: () => dispatch(getOffers())
})

export default connect(mapStateToProps, mapDispatchToProps)(OffersPage)