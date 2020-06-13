import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoCard(props) {
    let { data } = props
    return (

        <div className='col-4 my-5 '  >
            <Link>
                <div class="card mb-3 text-decoration-none">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={data.image} height="150px" class="card-img " alt="image" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-title text-truncate">{data.name}</p>
                                <p class="card-text text-muted text-truncate">{data.types}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}