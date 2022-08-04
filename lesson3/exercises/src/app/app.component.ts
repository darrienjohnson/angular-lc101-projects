import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = false;

  handleTakeOff(){
    let result = window.confirm('Is the shuttle ready for launch');
    if(result){
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight';
      this.takeOffEnabled = true;
    }
  }
  handleLand(rocketImage){
    let result = window.confirm('Is the shuttle ready to land');
    if(result){
      rocketImage.style.bottom = 0 + 'px';
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Shuttle landed';
      this.takeOffEnabled = false;
    }
  }
  handleAbort(){
    let result = window.confirm('Is the shuttle ready for launch');
    if(result){
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Flight Abort';
      this.takeOffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction){
    if(direction === 'left'){
      let movement = parseInt(rocketImage.style.left) -10 + 'px';
      rocketImage.style.left = movement
      this.width = this.width - 1000
    }else if(direction === 'down'){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement
      this.height = this.height - 1000
    } else if(direction === 'up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement
      this.height =this.height + 1000
    } else{
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement
      this.width = this.width + 1000
    }

    this.handleBoundry(this.height, this.width)
  }

  handleBoundry(height, width){
    if(height > 43000 || height < 6000 || width > 47000 || width < -2000){
      this.color = 'orange'
    } else {
      this.color = 'blue'
    }
  }

}
