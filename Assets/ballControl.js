﻿#pragma strict
var ballXPos : float;
var ballYPos : float;
var ballSpeed : float = 100;
function Start () {
 yield WaitForSeconds(2);
 GoBall();
}
function Update () {
 var xVel : float = rigidbody2D.velocity.x;
 if(xVel < 18 && xVel > - 18 && xVel !=0 )
 {
   if(xVel  > 0) {
    rigidbody2D.velocity.x = 20;  
   }
   else{
    rigidbody2D.velocity.x = -20;
   }
 }
 ballXPos = rigidbody2D.position.x;
 ballYPos = rigidbody2D.position.y;

 Debug.Log("Ball X Position: " + ballXPos);
 Debug.Log("Ball Y Position: " + ballYPos);
}

function OnCollisionEnter2D (colInfo : Collision2D) {
 if(colInfo.collider.tag == "Player") {
  rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
  audio.pitch = Random.Range(0.6,1.2f);
  audio.Play();
 }
}


function GoBall() {
  var randomNumber = Random.Range(0,2);
 if(randomNumber <= 0.5) {
   rigidbody2D.AddForce(new Vector2(ballSpeed,10));
 }
 else{
    rigidbody2D.AddForce(new Vector2(-ballSpeed,-10));
 }
 
}


function ResetBall()
{
 rigidbody2D.velocity.y=0;
 rigidbody2D.velocity.x=0;
 transform.position.x=0;
 transform.position.y=0;
 yield WaitForSeconds(0.5);
 GoBall();
}