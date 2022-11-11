import React, {useEffect} from 'react'
import { getDetail } from '../../Redux/actions/index';
import { useDispatch, useSelector } from "react-redux";

const CardDetail = (props) => {

  const dispatch = useDispatch()
  const sneakerDetail = useSelector(state => state.detail)

  useEffect(()=>{
    dispatch(getDetail(props.match.params.id))
  }, [dispatch, props.match.params.id])

  console.log(sneakerDetail)
  // console.log(Object.keys(sneakerDetail))

  return (
    <div>
    <div>CardDetail</div>

    {sneakerDetail?(
      <div>
        <h1>{sneakerDetail.title}</h1>
      </div>
    ):<p>Loading...</p>}

    </div>
  )
}

export default CardDetail;