$(document).ready(function(){
    
    var cs = new Vue({
        el: "#cs",
        data: {
            reddec: 255,
            redhex: "ff",
            greendec: 255,
            greenhex: "ff",
            bluedec: 255,
            bluehex: "ff",
            hexcode: "ffffff",
            rgbcode: "rgb(255,255,255)",
            chips: []
        },
        methods: {
            makecode: function(){
                this.hexcode = this.redhex+this.greenhex+this.bluehex;
                this.rgbcode = "rgb("+this.reddec+","+this.greendec+","+this.bluedec+")";
                $("#chip").css("background-color","#"+this.hexcode);
            },
            addchip: function(){
                this.chips.push(this.hexcode);
            },
            delchip: function(no){
                //alert(no);
                this.chips.splice(no,1);
            },
            copycode: function(code, no){
                //alert(code);
                $("#copyform").val(code).select();
                document.execCommand("copy");
                $(".chip").eq(no).children(".copyinfo").text("copied").delay(200).fadeOut();
            },
            showinfo: function(no){
                $(".chip").eq(no).children(".copyinfo").stop().fadeIn();
            },
            hideinfo: function(no){
                $(".chip").eq(no).children(".copyinfo").stop().fadeOut(function(){
                    $(".chip").eq(no).children(".copyinfo").text("copy to clipboard");
                });
            }
        },
        watch: {
            reddec: function(val){
                val = parseInt(val);
                if(val > 15){
                    this.redhex = val.toString(16);
                }else{
                    this.redhex = "0"+val.toString(16);
                }
            },
            greendec: function(val){
                val = parseInt(val);
                if(val > 15){
                    this.greenhex = val.toString(16);
                }else{
                    this.greenhex = "0"+val.toString(16);
                }
            },
            bluedec: function(val){
                val = parseInt(val);
                if(val > 15){
                    this.bluehex = val.toString(16);
                }else{
                    this.bluehex = "0"+val.toString(16);
                }
            },
            redhex: function(val){
                val = parseInt(val,16);
                this.reddec = val.toString(10);
            },
            greenhex: function(val){
                val = parseInt(val,16);
                this.greendec = val.toString(10);
            },
            bluehex: function(val){
                val = parseInt(val,16);
                this.bluedec = val.toString(10);
            },
            hexcode: function(val){
                this.redhex = val.substr(0,2);
                this.greenhex = val.substr(2,2);
                this.bluehex = val.substr(4,2);
                $("#chip").css("background-color","#"+val);
            }
        }
    });
    
});