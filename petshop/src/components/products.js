import React, { useState} from "react";
import './Dashboard.css'
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import a from "./image/about_img.png";
import b from "./image/bottom_wave.png";
import c from "./image/cat_food.png";
import d from "./image/contact_img.png";
import e from "./image/dog_food.png";
import f from "./image/footer_background.jpg";
import g from "./image/home_bg_img.jpg";
import h from "./image/product_01.jpg";
import i from "./image/product_02.jpg";
import j from "./image/product_03.jpg";
import k from "./image/product_04.jpg";
import l from "./image/product_05.jpg";
import m from "./image/product_06.jpg";
import n from "./image/shop_now_cat.png";
import o from "./image/shop_now_dog.png";
import p from "./image/top_wave.png";
import q from "./image/product07.jpeg";
import r from "./image/product_08.jpeg";
import s from "./image/product_09.jpeg";
import t from "./image/product_10.jpeg";
import u from "./image/product_11.jpeg";
import v from "./image/product_12.jpeg";
function Products(props){
    const nav=useNavigate();
  const [B,setB]=useState(0)
  const [A,setA]=useState(0)
  const [D,setD]=useState(0)
  const [C,setC]=useState(0)
  const [E,setE]=useState(0)
  const [F,setF]=useState(0)
  const [G,setG]=useState(0)
  const [H,setH]=useState(0)
  const [I,setI]=useState(0)
  const [J,setJ]=useState(0)
  const [K,setK]=useState(0)
  const [L,setL]=useState(0)
  const Products=[
    {
        item:'Crunchy Chicken Treats',
        n:A,
        price:A*750
    },
    {
        item:'Air Dried Treats',
        n:B,
        price:B*500
    },
    {
        item:'Licious Lamb Treats',
        n:C,
        price:C*600
    },
    {
        item:'Reward Treats',
        n:D,
        price:D*1500
    },
    {
        item:'Special Salman Treats',
        n:E,
        price:E*900
    },
    {
        item:'Bone Treats',
        n:F,
        price:F*800
    },
    {
        item:'Meat Treats',
        n:G,
        price:G*750
    },
    {
        item:'Nutritious',
        n:H,
        price:H*1000
    },
    {
        item:'Beef Treats',
        n:I,
        price:I*700
    },
    {
        item:'Pedigreeee',
        n:J,
        price:J*1000
    },
    {
        item:'Meat&Rice',
        n:K,
        price:K*750
    },
    {
        item:'PurePet',
        n:L,
        price:L*750
    }
  ]
  const pr=(A*750)+(B*500)+(C*600)+(D*1500)+(E*900)+(F*800)+(G*750)+(H*1000)+(I*700)+(J*1000)+(K*750)+(L*750)
    const s={
        display: 'inline-block',
        marginTop: '1rem',
        padding: '.8rem 2.8rem',
        borderRadius: '5rem',
        borderTopLeftRadius: '0',
        border: '0.2rem solid #130f40',
        cursor: 'pointer',
        background: 'none',
        color: '#FC7300',
        fontSize: '1.7rem',
        overflow: 'hidden',
        marginLeft:'5px',
  zIndex: '0',
  position: 'relative',
    }
    return (
        <div>

<section class="home" id="home">

<div class="content">
    <h3> <span>hi</span> Time to Buy Some Products in ThePurrfectPetStore</h3>
    <button className='btn one' style={s}>Shop now</button>
</div>

<img src={b} class="wave" alt="" />

</section>

<section class="shop" id="shop" style={{backgroundColor:'#fff'}}>

<h1 class="heading"> our <span> products </span> </h1>

<div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{A}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={h} alt="" />
        </div>
        <div class="content">
            <h3>Crunchy Chicken Treats</h3>
            <div class="amount">500₹ - 1000₹ </div>
            <button className='btn one' style={s} onClick={()=>setA(A+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setA(A-1)}>Remove</button>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{B}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={i} alt="" />
        </div>
        <div class="content">
            <h3>Air Dried Treats</h3>
            <div class="amount"> 250₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setB(B+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setB(B-1)}>Remove</button>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{C}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={j} alt="" />
        </div>
        <div class="content">
            <h3>Licious Lamb Treats</h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setC(C+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setC(C-1)}>Remove</button>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{D}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={k} alt="" />
        </div>
        <div class="content">
            <h3>Reward Treats </h3>
            <div class="amount">1500₹</div>
            <button className='btn one' style={s} onClick={()=>setD(D+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setD(D-1)}>Remove</button>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{E}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={l} alt="" />
        </div>
        <div class="content">
            <h3>Special Salmon Treats </h3>
            <div class="amount"> 500₹ - 1000₹ </div>
            <button className='btn one' style={s} onClick={()=>setE(E+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setE(E-1)}>Remove</button>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{F}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={m} alt="" />
        </div>
        <div class="content">
            <h3>Bone Treats </h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setF(F+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setF(F-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{G}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={q} alt="" />
        </div>
        <div class="content">
            <h3>Meat Treats </h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setG(G+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setG(G-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{H}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={r} alt="" />
        </div>
        <div class="content">
            <h3>Nutritious</h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setH(H+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setH(H-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{I}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={i} alt="" />
        </div>
        <div class="content">
            <h3>Beef Treats </h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setI(I+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setI(I-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{J}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={t} alt="" />
        </div>
        <div class="content">
            <h3>Pedigreeeeee</h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setJ(J+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setJ(J-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{K}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={u} alt="" />
        </div>
        <div class="content">
            <h3>Meat & Rice</h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setK(K+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setK(K-1)}>Remove</button>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart">{L}</a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={v} alt="" />
        </div>
        <div class="content">
            <h3>PurePet</h3>
            <div class="amount">500₹ - 1000₹</div>
            <button className='btn one' style={s} onClick={()=>setL(L+1)}>Add to Cart</button>
            <button className='btn one' style={s} onClick={()=>setL(L-1)}>Remove</button>
        </div>
    </div>


</div>

</section>
<h1 style={{backgroundColor:'#fff',fontSize:'5rem',textAlign:'center'}}>Cart</h1>
<table class="table" style={{backgroundColor:'#fff',fontSize:'3rem',height:'300px'}}>
  <thead>
    <tr>
      <th scope="col">item</th>
      <th scope="col">No.of items</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>

      {Products.map(a=>(
        <tr>
            <td>{a.item}</td>
            <td>{a.n}</td>
            <td>{a.price}</td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td>Subtotal</td>
        <td>{pr}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td> <button className='btn one' style={s} onClick={()=>{alert('thanks for buying any problem you can contact us ');
    nav('/Dash')}}>Buy Now</button></td>
      </tr>
  </tbody>
  

</table>


<section class="contact" id="contact" style={{backgroundColor:'#fff'}}>

<div class="image">
    <img src={d} alt="" />
</div>
<form action="">
    <h3>contact us</h3>
    <input type="text" placeholder="your name" class="box" />
    <input type="email" placeholder="your email" class="box" />
    <input type="tumber" placeholder="your number" class="box" />
    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="send message" class="btn" style={s}/>
</form>
</section>
<section class="footer">
<img src={p} alt="" />
<div class="share">
    <a href="#h" class="btn" style={s}> <i class="fab fa-facebook-f"></i> facebook </a>
    <a href="#h" class="btn" style={s}> <i class="fab fa-twitter"></i> twitter </a>
    <a href="#h" class="btn" style={s}> <i class="fab fa-instagram"></i> instagram </a>
    <a href="#h" class="btn" style={s}> <i class="fab fa-linkedin"></i> linkedin </a>
    <a href="#h" class="btn" style={s}> <i class="fab fa-pinterest"></i> pinterest </a>
</div>
<div class="credit"> created by <span> Aayushi Kar and Jennifer Marrila </span> | all rights reserved! </div>
</section>
</div>
    )
}

export default Products;
