   function Slider(classname){
    this.main = document.getElementsByClassName("icons")[0];
    var self=this;
    // this.main.children[1].addEventListener("click", this.next);
    this.margin = 0;
    this.prev = 0;
    this.slide_div_length = document.getElementsByClassName(classname)[0].clientWidth; 
    this.slider_length = document.querySelectorAll(".slides ."+classname).length;
    
    document.getElementsByClassName("slides")[0].style.transition = "all 0.5s"; 
    this.main.children[1].addEventListener("click", function() {
        self.prev++;
        self.margin -= self.slide_div_length + 20; 
        this.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px';
        console.log(this.slides_div_margin) 
        if (self.prev >= self.slider_length - 4) {
            self.margin = 0;
            this.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; 
            self.prev = 0;
        }
    })
    // this.main.children[0].addEventListener("click", this.previous);
   this.main.children[0].addEventListener("click",function () {
        self.prev--;
        self.margin += self.slide_div_length + 20;
        this.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; 
        if (self.prev <= 0) {
            self.margin = -(self.slide_div_length + 20) * 4;
            self.prev = 5;
            this.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; 
        }
    })
   }