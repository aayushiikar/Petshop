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
function Dashboard(props){
  const nav=useNavigate();
  const [C,setC]=useState('')
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
  zIndex: '0',
  position: 'relative',
    }
    return (
        <div>

<section class="home" id="home">

<div class="content">
    <h3> <span>hi</span> welcome to our ThePurrfectPetStore </h3>
    <button className='btn one' style={s} onClick={()=>nav('/products')}>Shop now</button>
</div>

<img src={b} class="wave" alt="" />

</section>


<section class="about" id="about" style={{backgroundColor:'#fff'}}>

<div class="image">
    <img src={a} alt="" />
</div>

<div class="content">
    <h3>premium <span>pet food</span> manufacturer</h3>
    <p> We use only the finest, natural ingredients to ensure the best nutrition for your furry friend. Our wide variety of options, including organic and grain-free options, cater to all types of dietary needs. Our strict quality control measures guarantee the safety and effectiveness of our products. Give your pet the best with our premium, nutritious pet food. Try us today and taste the difference in your pet's health and well-being.</p>
    
</div>

</section>


<div class="dog-food" style={{backgroundColor:'#fff'}}>

<div class="image">
    <img src={e} alt="" />
</div>

<div class="content">
    <h3> <span>Treats </span> dog food </h3>
    <p>Give your furry companion a treat they'll love with our premium beef treats for dogs. Made with real beef, these treats are a natural and healthy source of protein for your dog. They are also grain-free, making them a perfect option for dogs with sensitive stomachs or food allergies. Our treats are formulated to be nutritious and easy to digest, without added preservatives or fillers. We make sure that our treats are made with human-grade meat and are slow-cooked to retain the maximum nutritional value. Available in different forms like dried, freeze-dried or canned, to suit your dog's preference. Treat your dog to the delicious taste of our premium beef treats today!</p>
    <div class="amount">500₹-1000₹</div>
    <a href="#"> <img src={o} alt="" />  </a>
</div>

</div>

<div class="cat-food" style={{backgroundColor:'#fff'}}>

<div class="content">
    <h3> <span>Special Salmon Treats</span> cat food </h3>
    <p>Treat your feline friend to the delicious taste of our premium salmon cat treats. Made with real salmon, these treats are a healthy and natural source of protein for your cat. They are also grain-free, which makes them a perfect option for cats with sensitive stomachs or food allergies. Our treats are formulated to be nutritious and easy to digest, without added preservatives or fillers. Our treats come in different forms like dried, freeze-dried or canned, to suit your cat's preference. Give your cat a treat they'll love and offer them our premium salmon cat treats today!</p>
    <div class="amount">250₹-700₹</div>
    <a href="#"> <img src={n} alt="" /> </a>
</div>

<div class="image">
    <img src={c} alt="" />
</div>

</div>
<section class="shop" id="shop" style={{backgroundColor:'#fff'}}>

<h1 class="heading"> our <span> products </span> </h1>

<div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={h} alt="" />
        </div>
        <div class="content">
            <h3>Crunchy Chicken Treats</h3>
            <div class="amount">500₹ - 1000₹ </div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={i} alt="" />
        </div>
        <div class="content">
            <h3>Air Dried Treats</h3>
            <div class="amount"> 250₹ - 1000₹</div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={j} alt="" />
        </div>
        <div class="content">
            <h3>Licious Lamb Treats</h3>
            <div class="amount">500₹ - 1000₹</div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={k} alt="" />
        </div>
        <div class="content">
            <h3>Reward Treats </h3>
            <div class="amount">1500₹</div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={l} alt="" />
        </div>
        <div class="content">
            <h3>Special Salmon Treats </h3>
            <div class="amount"> 500₹ - 1000₹ </div>
        </div>
    </div>

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src={m} alt="" />
        </div>
        <div class="content">
            <h3>Bone Treats </h3>
            <div class="amount">500₹ - 1000₹</div>
        </div>
    </div>

</div>

</section>

<section class="services" id="services" style={{backgroundColor:'#fff'}}>

<h1 class="heading"> our <span>services</span> </h1>

<div class="box-container">

    <div class="box">
        <i class="fas fa-dog"></i>
        <h3>dog boarding</h3>
        <a href="#h" class="btn" style={s} >read more</a> 
    </div>

    <div class="box">
        <i class="fas fa-cat"></i>
        <h3>cat boarding</h3>
        <a href="#h" class="btn" style={s}>read more</a>
    </div>

    <div class="box">
        <i class="fas fa-bath"></i>
        <h3>spa & grooming</h3>
        <a href="#h" class="btn" style={s}>read more</a>
    </div>

    <div class="box">
        <i class="fas fa-drumstick-bite"></i>
        <h3>healthy meal</h3>
        <a href="#h" class="btn" style={s}>read more</a>
    </div>

    <div class="box">
        <i class="fas fa-baseball-ball"></i>
        <h3>activity exercise</h3>
        <a href="#h" class="btn" style={s}>read more</a>
    </div>

    <div class="box">
        <i class="fas fa-heartbeat"></i>
        <h3>health care</h3>
        <a href="#h" class="btn" style={s}>read more</a>
    </div>

</div>

</section>


<section class="plan" id="plan" style={{backgroundColor:'#fff'}}>

<h1 class="heading"> choose a <span>plan</span> </h1>

<div class="box-container">

    <div class="box">
        <h3 class="title">pet care</h3>
        <h3 class="day"> 1 day </h3>
        <i class="fas fa-bicycle icon"></i>
        <div class="list">
            <p> pet room <span class="fas fa-check"></span> </p>
            <p> pet grooming <span class="fas fa-check"></span> </p>
            <p> pet exercise <span class="fas fa-check"></span> </p>
            <p> pet meals <span class="fas fa-check"></span> </p>
        </div>
        <div class="amount"><span></span>500₹</div>
        <a href="#h" class="btn" style={s} onClick={()=>alert('thanks for choosing the plan soon you will get notified')}> choose plan </a>
    </div>

    <div class="box">
        <h3 class="title">pet care</h3>
        <h3 class="day"> 10 days </h3>
        <i class="fas fa-motorcycle icon"></i>
        <div class="list">
            <p> pet room <span class="fas fa-check"></span> </p>
            <p> pet grooming <span class="fas fa-check"></span> </p>
            <p> pet exercise <span class="fas fa-check"></span> </p>
            <p> pet meals <span class="fas fa-check"></span> </p>
        </div>
        <div class="amount"><span></span>5000₹</div>
        <a href="#h" class="btn" style={s} onClick={()=>alert('thanks for choosing the plan soon you will get notified')}> choose plan </a>
    </div>

    <div class="box">
        <h3 class="title">pet care</h3>
        <h3 class="day"> 30 days </h3>
        <i class="fas fa-car-side icon"></i>
        <div class="list">
            <p> pet room <span class="fas fa-check"></span> </p>
            <p> pet grooming <span class="fas fa-check"></span> </p>
            <p> pet exercise <span class="fas fa-check"></span> </p>
            <p> pet meals <span class="fas fa-check"></span> </p>
        </div>
        <div class="amount"><span></span>15000₹</div>
        <a href="#h" class="btn" style={s} onClick={()=>alert('thanks for choosing the plan soon you will get notified')}> choose plan </a>
    </div>

</div>

</section>


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

export default Dashboard;
