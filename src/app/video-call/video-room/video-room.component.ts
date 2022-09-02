import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng"
import AgoraRTM, { RtmChannel, RtmClient } from 'agora-rtm-sdk';
import { NgxAgoraService } from 'ngx-agora';

// let client: RtmClient;
// let channel: RtmChannel;

// let localStream   : MediaProvider | MediaStream;
// let remoteStream  : MediaProvider | null;
// let peerConnection: RTCPeerConnection;



// let token  = '';
// let uid    = String( Math.floor( Math.random() * 1000 ));




@Component({
  selector: 'app-video-room',
  templateUrl: './video-room.component.html',
  styleUrls: ['./video-room.component.css']
})
export class VideoRoomComponent implements OnInit {


  ngOnInit(): void {
      
    // if( !this.roomId ){
    //   this.router.navigate([`/videoCall/room`] )
    // } 
    // this.init()
  }

  title                 = 'Angular-Video';
  remoteCalls: string[] = [];
  localCallId = 'agora_local';

  constructor( private ngxAgoraServ: NgxAgoraService ){}
















  // @ViewChild("user_1") user_1!: HTMLVideoElement ;
  // @ViewChild("user_2") user_2!: HTMLVideoElement ;

  // @ViewChild("mic-btn")     mic_btn   !: HTMLDivElement;
  // @ViewChild("camera-btn")  camera_btn!: HTMLDivElement;
  // @ViewChild("leave-btn")   leave_btn !: HTMLDivElement;


  // appID : string = "25eb4c988a7644d9ac9e6362bf1d1a90";

  // queryString = window.location.search;
  // urlParams = new URLSearchParams( this.queryString );
  // roomId : string | null = this.urlParams.get('room');



  // //Declaracion de objetos generares para desarrollo de app
  // servers = {
  //   iceServers: [
  //     {
  //       urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
  //     }
  //   ]
  // }

  // constraints = {
  //   video:{
  //     width:{min:640, ideal:1920, max:1920},
  //     height:{min:480, ideal:1080, max:1080},
  //   },
  //     audio:true
  // }
  

  // constructor(  private route : ActivatedRoute,
  //               private router: Router  ) { 
                
  //               }



  // async init(){


  //   client = await AgoraRTM.createInstance( this.appID )
  //   await client.login({uid, token})

  //   channel = client.createChannel( this.roomId! )
  //   await channel.join()

  //   channel.on('MemberJoined', this.handleUserJoined)
  //   channel.on('MemberLeft',  this.handleUserLeft )

  //   client.on('MessageFromPeer', this.handleMessageFromPeer )

  //   localStream = await navigator.mediaDevices.getUserMedia( this.constraints )

    
  //   this.user_1.srcObject = localStream
  // }


  // async handleMessageFromPeer ( message:any,  MemberId: any ) {


  
    
  //   message = JSON.parse( message.text )

  //   if(message.type === 'offer'){
  //       this.createAnswer(MemberId, message.offer)
  //   }

  //   if(message.type === 'answer'){
  //       this.addAnswer(message.answer)
  //   }

  //   if(message.type === 'candidate'){
  //       if(peerConnection){
  //           peerConnection.addIceCandidate(message.candidate)
  //       }
  //   }


  // }


  // async addAnswer ( answer: any ) {

    
  //   if(!peerConnection.currentRemoteDescription){
  //       peerConnection.setRemoteDescription(answer)
  //   }

  // }


  // async createAnswer (  MemberId: any, offer: any ) {


  //   await this.createPeerConnection(MemberId)

  //   await peerConnection.setRemoteDescription(offer)

  //   let answer = await peerConnection.createAnswer()
  //   await peerConnection.setLocalDescription(answer)

  //   client.sendMessageToPeer({text:JSON.stringify({'type':'answer', 'answer':answer})}, MemberId)

  // } 


  // handleUserLeft( MemberId : string )  {

  //   this.user_2.style.display = 'none'
  //   this.user_1.classList.remove('smallFrame')
  // }


  // async handleUserJoined ( MemberId: string  ) {
  //   console.log("New User enter into the chat")
  //   this.createOffer(MemberId)
  // }
  


  // async createOffer (MemberId: string )  {

    
  //   await this.createPeerConnection(MemberId)
    

  //   let offer = await peerConnection.createOffer()
  //   await peerConnection.setLocalDescription( offer )

  //   client.sendMessageToPeer({text:JSON.stringify({'type':'offer', 'offer':offer})}, MemberId)

  // }


  // async createPeerConnection (  MemberId  : string ) {

  //   peerConnection =  new RTCPeerConnection( this.servers )

  //   remoteStream =  new MediaStream()

  //   this.user_2.srcObject = remoteStream
  //   this.user_2.style.display = 'block'
  //   console.log( this.user_2 )
  //   console.log( new MediaStream() )

  //   this.user_1.classList.add('smallFrame')
    

  //   if(!localStream){

      
  //       localStream = await navigator.mediaDevices.getUserMedia( {video:true, audio:false } )
  //       this.user_1.srcObject = localStream
  //   }

  //   ( <MediaStream>localStream ).getTracks().forEach((track) => {
  //       ( <MediaStream><unknown>peerConnection ).addTrack( track )
        
  //   })

  //    peerConnection.ontrack = ( event ) => {
  //       event.streams[0].getTracks().forEach((track) => {
  //           ( <MediaStream>remoteStream ).addTrack(track)
            
  //       })
  //   }

  //   peerConnection.onicecandidate = async (event) => {
  //       if(event.candidate){
          
  //           client.sendMessageToPeer({text:JSON.stringify({'type':'candidate', 'candidate':event.candidate})}, MemberId)
  //       }

        
  //   } 
  // }











  // async leaveChannel(){
  //   await channel.leave()
  //   await client.logout()
  // }

  // async toggleCamera (){

  //   let videoTrack = ( <MediaStream>localStream ).getTracks().find((track: { kind: string; }) => track.kind === 'video')

  //   if(videoTrack!.enabled){
  //       videoTrack!.enabled = false
  //       // document.getElementById('camera-btn').style.backgroundColor = '#ffafcc'
  //       this.camera_btn.style.backgroundColor = '#ffafcc';
  //   }else{
  //       videoTrack!.enabled = true
  //       // document.getElementById('camera-btn').style.backgroundColor = '#d6ccc2'
  //       this.camera_btn.style.backgroundColor = '#d6ccc2';
  //   }
  // }

  // async toggleMic(){

  //     let audioTrack = ( <MediaStream>localStream ).getTracks().find((track: { kind: string; }) => track.kind === 'audio')

  //     if(audioTrack!.enabled){
  //         audioTrack!.enabled = false
  //         // document.getElementById('mic-btn').style.backgroundColor = '#ffafcc'
  //         this.mic_btn.style.backgroundColor = 'ffafcc';
  //     }else{
  //         audioTrack!.enabled = true
  //         // document.getElementById('mic-btn').style.backgroundColor = '#d6ccc2'
  //         this.mic_btn.style.backgroundColor = '  #d6ccc2';
  //     }
  // }
  
}
