AFRAME.registerComponent('diver-rotation-reader', {
    schema: {
        speedOfRotationY: {type: 'number', default: 0},
        speedOfRotationX: {type: 'number', default: 0}
    },
    init: function(){
        window.addEventListener('keydown', (e)=>{
            if(e.key === 'ArrowRight'){
                if(this.data.speedOfRotationY < 0.1){
                    this.data.speedOfRotationY += 0.01
                }
            }
            if(e.key === 'ArrowLeft'){
                if(this.data.speedOfRotationY > -0.1){
                    this.data.speedOfRotationY -= 0.01
                }
            }
            if(e.key === 'ArrowUp'){
                if(this.data.speedOfRotationX > -0.1){
                    this.data.speedOfRotationX -= 0.01
                }
            }
            if(e.key === 'ArrowDown'){
                if(this.data.speedOfRotationX < 0.1){
                    this.data.speedOfRotationX += 0.01
                }
            }
        })
    },
    tick: function(){
        var mapRotation = this.el.getAttribute('rotation')
        mapRotation.y += this.data.speedOfRotationY
        mapRotation.x += this.data.speedOfRotationX
        this.el.setAttribute('rotation', {x: mapRotation.x, y: mapRotation.y, z: mapRotation.z})
    },
})