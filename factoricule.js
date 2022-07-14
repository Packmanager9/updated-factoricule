
window.addEventListener('DOMContentLoaded', (event) => {

    let video_recorder
    let recording = 0
    // function CanvasCaptureToWEBM(canvas, bitrate) {
    //     // the video_recorder is set to  '= new CanvasCaptureToWEBM(canvas, 4500000);' in the setup, 
    //     // it uses the same canvas as the rest of the file.
    //     // to start a recording call .record() on video_recorder
    //     /*
    //     for example, 
    //     if(keysPressed['-'] && recording == 0){
    //         recording = 1
    //         video_recorder.record()
    //     }
    //     if(keysPressed['='] && recording == 1){
    //         recording = 0
    //         video_recorder.stop()
    //         video_recorder.download('File Name As A String.webm')
    //     }
    //     */
    //     this.record = Record
    //     this.stop = Stop
    //     this.download = saveToDownloads
    //     let blobCaptures = []
    //     let outputFormat = {}
    //     let recorder = {}
    //     let canvasInput = canvas.captureStream()
    //     if (typeof canvasInput == undefined || !canvasInput) {
    //         return
    //     }
    //     const video = document.createElement('video')
    //     video.style.display = 'none'

    //     function Record() {
    //         let formats = [
    //             "video/webm\;codecs=h264",
    //             "video/webm\;codecs=vp8",
    //             'video/vp8',
    //             "video/webm",
    //             'video/webm,codecs=vp9',
    //             "video/webm\;codecs=daala",
    //             "video/mpeg"
    //         ];

    //         for (let t = 0; t < formats.length; t++) {
    //             if (MediaRecorder.isTypeSupported(formats[t])) {
    //                 outputFormat = formats[t]
    //                 break
    //             }
    //         }
    //         if (typeof outputFormat != "string") {
    //             return
    //         } else {
    //             let videoSettings = {
    //                 mimeType: outputFormat,
    //                 videoBitsPerSecond: bitrate || 2000000 // 2Mbps
    //             };
    //             blobCaptures = []
    //             try {
    //                 recorder = new MediaRecorder(canvasInput, videoSettings)
    //             } catch (error) {
    //                 return;
    //             }
    //             recorder.onstop = handleStop
    //             recorder.ondataavailable = handleAvailableData
    //             recorder.start(100)
    //         }
    //     }
    //     function handleAvailableData(event) {
    //         if (event.data && event.data.size > 0) {
    //             blobCaptures.push(event.data)
    //         }
    //     }
    //     function handleStop() {
    //         const superBuffer = new Blob(blobCaptures, { type: outputFormat })
    //         video.src = window.URL.createObjectURL(superBuffer)
    //     }
    //     function Stop() {
    //         recorder.stop()
    //         video.controls = true
    //     }
    //     function saveToDownloads(input) { // specifying a file name for the output
    //         const name = input || 'video_out.webm'
    //         const blob = new Blob(blobCaptures, { type: outputFormat })
    //         const url = window.URL.createObjectURL(blob)
    //         const storageElement = document.createElement('a')
    //         storageElement.style.display = 'none'
    //         storageElement.href = url
    //         storageElement.download = name
    //         document.body.appendChild(storageElement)
    //         storageElement.click()
    //         setTimeout(() => {
    //             document.body.removeChild(storageElement)
    //             window.URL.revokeObjectURL(url)
    //         }, 100)
    //     }
    // }
    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for (let t = 0; t < 10000000; t++) {
        squaretable[`${t}`] = Math.sqrt(t)
        if (t > 999) {
            t += 9
        }
    }
    let trainBackLink = {}
    let menuon = 0
    let tooltiptext = ''
    let drawcheck = 0
    let pointeron = 0
    let play = 1
    let music = new Audio()
    music.src = 'Factoricules.mp3'
    // const gamepadAPI = {
    //     controller: {},
    //     turbo: true,
    //     connect: function (evt) {
    //         if (navigator.getGamepads()[0] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[1] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[2] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[3] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         }
    //         for (let i = 0; i < gamepads.length; i++) {
    //             if (gamepads[i] === null) {
    //                 continue;
    //             }
    //             if (!gamepads[i].connected) {
    //                 continue;
    //             }
    //         }
    //     },
    //     disconnect: function (evt) {
    //         gamepadAPI.turbo = false;
    //         delete gamepadAPI.controller;
    //     },
    //     update: function () {
    //         gamepadAPI.controller = navigator.getGamepads()[0]
    //         gamepadAPI.buttonsCache = [];// clear the buttons cache
    //         for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
    //             gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    //         }
    //         gamepadAPI.buttonsStatus = [];// clear the buttons status
    //         var c = gamepadAPI.controller || {}; // get the gamepad object
    //         var pressed = [];
    //         if (c.buttons) {
    //             for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
    //                 if (c.buttons[b].pressed) {
    //                     pressed.push(gamepadAPI.buttons[b]);
    //                 }
    //             }
    //         }
    //         var axes = [];
    //         if (c.axes) {
    //             for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
    //                 axes.push(c.axes[a].toFixed(2));
    //             }
    //         }
    //         gamepadAPI.axesStatus = axes;// assign received values
    //         gamepadAPI.buttonsStatus = pressed;
    //         // console.log(pressed); // return buttons for debugging purposes
    //         return pressed;
    //     },
    //     buttonPressed: function (button, hold) {
    //         var newPress = false;
    //         for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
    //             if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
    //                 newPress = true;// set the boolean variable to true
    //                 if (!hold) {// if we want to check the single press
    //                     for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
    //                         if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
    //                             newPress = false;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return newPress;
    //     },
    //     buttons: [
    //         'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
    //     ],
    //     buttonsCache: [],
    //     buttonsStatus: [],
    //     axesStatus: []
    // };
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        sqrDis() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            return (hypotenuse)
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Triangle {
        constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * leg1Ratio
            this.x2 = this.x - this.length * leg2Ratio
            this.tip = this.y - this.length * heightRatio
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.fill = fill
            this.stroke = strokeWidth
        }
        draw() {
            canvas_context.strokeStyle = this.color
            canvas_context.stokeWidth = this.stroke
            canvas_context.beginPath()
            canvas_context.moveTo(this.x, this.y)
            canvas_context.lineTo(this.x1, this.y)
            canvas_context.lineTo(this.x, this.tip)
            canvas_context.lineTo(this.x2, this.y)
            canvas_context.lineTo(this.x, this.y)
            if (this.fill == 1) {
                canvas_context.fill()
            }
            canvas_context.stroke()
            canvas_context.closePath()
        }
        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }


    // let hop = new Image()
    // hop.src = 'rcpomaolp.png'


    class Particle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.age = 0
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.type = 1
        }
        copy() {
            let copy = new Particle(0, 0, 0, 0)
            copy.type = this.type
            copy.radius = this.radius
            copy.y = this.y
            copy.x = this.x
            copy.xmom = this.xmom
            copy.ymom = this.ymom
            copy.color = this.color
            copy.last = this.last
            copy.age = 0
            // copy.gripped = this.gripped
            // copy.marked = this.marked
            return copy
        }
        draw() {

            canvas_context.lineWidth = this.strokeWidth
            if (this.type == 1) {
                this.color = "#00FF00"
            }
            if (this.type == 2) {
                this.color = "#FF0000"
            }
            if (this.type == 3) {
                this.color = "#0000FF"
            }
            canvas_context.strokeStyle = this.color

            // canvas_context.lineWidth = 5
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius * 3, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color


                if (isFinite(this.x) && isFinite(this.y) && isFinite(this.radius)) {
                    const gard = canvas_context.createRadialGradient((this.x), (this.y), 0, (this.x), (this.y), Math.max(this.radius * 2.3, 0))
                    this.string = this.color
                    if (typeof this.string !== "string") {
                        this.string = "#FF0000"
                    }
                    gard.addColorStop(0, this.string + `ff`)
                    gard.addColorStop(0.01, this.string + "FF")
                    gard.addColorStop(0.2, this.string + "FF")
                    gard.addColorStop(.5, this.string + "55")
                    gard.addColorStop(1, this.string + "00")
                    canvas_context.fillStyle = gard
                    canvas_context.fill()
                    // canvas_context.drawImage(hop,0,0,hop.width, hop.height, this.x-this.radius*4, this.y-this.radius*4, this.radius*8, this.radius*8)
                    // canvas_context.stroke();
                }
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.age = 0
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.type = 1
        }
        copy() {
            let copy = new Particle(0, 0, 0, 0)
            copy.type = this.type
            copy.radius = this.radius
            copy.y = this.y
            copy.x = this.x
            copy.xmom = this.xmom
            copy.ymom = this.ymom
            copy.color = this.color
            copy.last = this.last
            copy.age = 0
            // copy.gripped = this.gripped
            // copy.marked = this.marked
            return copy
        }
        draw() {

            canvas_context.lineWidth = this.strokeWidth
            if (this.type == 1) {
                this.color = "#00FF00"
            }
            if (this.type == 2) {
                this.color = "#FF0000"
            }
            if (this.type == 3) {
                this.color = "#0000FF"
            }
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class Circles {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.age = 0
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.type = 1
        }
        copy() {
            let copy = new Particle(0, 0, 0, 0)
            copy.type = this.type
            copy.radius = this.radius
            copy.y = this.y
            copy.x = this.x
            copy.xmom = this.xmom
            copy.ymom = this.ymom
            copy.color = this.color
            copy.last = this.last
            copy.age = 0
            // copy.gripped = this.gripped
            // copy.marked = this.marked
            return copy
        }
        draw() {

            canvas_context.lineWidth = this.strokeWidth
            if (this.type == 1) {
                this.color = "#00FF00"
            }
            if (this.type == 2) {
                this.color = "#FF0000"
            }
            if (this.type == 3) {
                this.color = "#0000FF"
            }
            if (this.type == 4) {
                this.color = "#FFFF00"
            }
            if (this.type == 1001) {
                this.color = "#FFBB44"
            }
            if (this.type == 1002) {
                this.color = "#FF00AA"
            }
            if (this.type == 1003) {
                this.color = "#FFCC88"
            }
            if (this.type == 1004) {
                this.color = "#FFCC88"
            }
            if (this.type == 1005) {
                this.color = "#FFAAAA"
            }
            if (this.type == 1006) {
                this.color = "#AAAA00"
            }
            if (this.type == 1007) {
                this.color = "#00AAAA"
            }
            if (this.type == 5) {
                this.color = "#FF00FF"
            }
            if (this.type == 6) {
                this.color = "#00FFFF"
            }
            if (this.type == 10) {
                this.color = "#FFFFFF"
            }
            if (this.type == 11) {
                this.color = "#FFAA00"
            }
            if (this.type == 12) {
                this.color = "#AAFF00"
            }
            if (this.type == 13) {
                this.color = "#55FFAA"
            }
            if (this.type == 14) {
                this.color = "#99AAFF"
            }
            if (this.type == 15) {
                this.color = "#FFAAFF"
            }
            if (this.type == 16) {
                this.color = "#FF7744"
            }
            if (this.type == 21) {
                this.color = getRandomLightColor()
            }
            if (this.type == 109) {
                this.color = "#FF1096"
            }
            if (this.type == 28) {
                this.color = "#777777"
            }
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = .70712
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                // canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Particle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Particle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Particle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            // canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            // canvas_context.fill()
            canvas_context.lineWidth = .5
            // canvas_context.stroke()
            // canvas_context.closePath()
        }
    } class PolygonClean {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Particle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Particle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Particle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            // canvas_context.fill()
            canvas_context.lineWidth = .5
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        push(object) {
            this.shapes.push(object)
        }
    }

    function setUp(canvas_pass, style = "#333333") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        // video_recorder = new CanvasCaptureToWEBM(canvas, 2500000);
        window.setInterval(function () {
            main()
        }, 34)
        document.addEventListener('keydown', (event) => {


            if (event.key != "ArrowRight") {

                if (event.key != "ArrowUp") {

                    if (event.key != "ArrowDown") {

                        if (event.key != "ArrowLeft") {
                            keysPressed[event.key.toLocaleLowerCase()] = true;
                        } else {

                            keysPressed[event.key] = true;
                        }
                    } else {

                        keysPressed[event.key] = true;
                    }
                } else {

                    keysPressed[event.key] = true;
                }
            } else {

                keysPressed[event.key] = true;
            }
            // keysPressed[event.key] = true;



            if (keysPressed['m'] || keysPressed[' ']) {
                if (menuon == 1) {
                    menuon = 0
                } else {
                    menuon = 1
                }
            }
        });
        document.addEventListener('keyup', (event) => {

            if (event.key != "ArrowRight") {

                if (event.key != "ArrowUp") {

                    if (event.key != "ArrowDown") {

                        if (event.key != "ArrowLeft") {
                            if (event.key != "q") {

                                delete keysPressed[event.key.toLocaleLowerCase()];
                            } else {

                                delete keysPressed[event.key];
                            }
                        } else {

                            delete keysPressed[event.key];
                        }
                    } else {

                        delete keysPressed[event.key];
                    }
                } else {

                    delete keysPressed[event.key];
                }
            } else {

                delete keysPressed[event.key];
            }
        });
        window.addEventListener('pointerdown', e => {
            pointeron = 1
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            // console.log(canvas_context.getTransform())
            TIP_engine.x = XS_engine / 3 - canvas_context.getTransform().e / 3
            TIP_engine.y = YS_engine / 3 - canvas_context.getTransform().f / 3
            TIP_engine.body = TIP_engine
            // example usage: if(object.isPointInside(TIP_engine)){ take action }

            if (menuon == 1) {
                for (let t = 0; t < menu.blocks.length; t++) {
                    if (menu.blocks[t].isPointInside(TIP_engine)) {
                        menu.selector = t
                        return
                    }
                }

                if (keysPressed['z']) {
                    menu.selector = 12
                }


                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        if (candyman.structures.length > 0) {
                            if (candyman.structures[candyman.structures.length - 1].lock == 0) {
                                trainBackLink = grid.blocks[t]
                                candyman.structures[candyman.structures.length - 1].event = 1
                            } else {
                                interfacefunc(t)
                            }
                        } else {
                            interfacefunc(t)
                        }

                    }
                }

            } else {
                if (candyman.structures.length > 0) {
                    if (candyman.structures[candyman.structures.length - 1].lock == 0) {
                        for (let t = 0; t < grid.blocks.length; t++) {
                            if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                trainBackLink = grid.blocks[t]
                                candyman.structures[candyman.structures.length - 1].event = 1
                            }
                        }
                    }
                }

                if (keysPressed['z']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            for (let j = 0; j < grid.blocks[t].dots.length; j++) {
                                if (grid.blocks[t].body.isPointInside(grid.blocks[t].dots[j])) {
                                    grid.blocks[t].dots[j].gripped = 0
                                }
                            }
                            for (let j = 0; j < grid.blocks[t].mols.length; j++) {
                                if (grid.blocks[t].body.isPointInside(grid.blocks[t].mols[j])) {
                                    grid.blocks[t].mols[j].gripped = 0
                                }
                            }
                            for (let j = 0; j < grid.blocks[t].compmols.length; j++) {
                                if (grid.blocks[t].body.isPointInside(grid.blocks[t].compmols[j])) {
                                    grid.blocks[t].compmols[j].gripped = 0
                                }
                            }
                            grid.blocks[t].belt = 0
                            grid.blocks[t].xdir = 0
                            grid.blocks[t].ydir = 0
                            for (let k = 0; k < candyman.structures.length; k++) {
                                if (candyman.structures[k].tile == grid.blocks[t]) {
                                    if (typeof candyman.structures[k].body != "undefined") {
                                        if (candyman.structures[k].body.type > 3 && candyman.structures[k].body.type < 10) {
                                            grid.blocks[t].assembler = 0
                                        }
                                        if (candyman.structures[k].body.type > 9) {
                                            grid.blocks[t].compssembler = 0
                                        }
                                    }
                                    candyman.structures.splice(k, 1)
                                    candyman.selectedindex--
                                    break
                                }
                            }
                        }
                    }
                }


                // if(keysPressed['q']){
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        if (keysPressed['y']) {
                            let etylbase = new Assembler(grid.blocks[t])
                            etylbase.body.type = 4
                            candyman.structures.push(etylbase)
                            candyman.selectedindex++
                        }
                        if (keysPressed['h']) {
                            let h2base = new Assembler(grid.blocks[t])
                            h2base.body.type = 6
                            candyman.structures.push(h2base)
                            candyman.selectedindex++
                        }
                        if (keysPressed['t']) {
                            let co2base = new Assembler(grid.blocks[t])
                            co2base.body.type = 5
                            candyman.structures.push(co2base)
                            candyman.selectedindex++
                        }
                        if (keysPressed['x']) {
                            let glucbase = new Compssembler(grid.blocks[t])
                            glucbase.body.type = 10
                            candyman.structures.push(glucbase)
                            candyman.selectedindex++
                        }
                        if (keysPressed['c']) {
                            let glucbase = new Compssembler(grid.blocks[t])
                            glucbase.body.type = 11
                            candyman.structures.push(glucbase)
                            candyman.selectedindex++
                        }
                        if (keysPressed['e']) {
                            let glucbase = new Compssembler(grid.blocks[t])
                            glucbase.body.type = 12
                            candyman.structures.push(glucbase)
                            candyman.selectedindex++
                        }
                        if (keysPressed['f']) {
                            let glucbase = new Cup(grid.blocks[t])
                            candyman.structures.push(glucbase)
                            candyman.selectedindex++
                        }

                        // trainBackLink = grid.blocks[t]
                    }
                }
                // }
                if (keysPressed['n']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            grid.blocks[t].belt = 1
                            grid.blocks[t].xdir = 1
                            grid.blocks[t].ydir = 0
                        }
                    }
                }
                if (keysPressed['v']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            grid.blocks[t].belt = 1
                            grid.blocks[t].xdir = -1
                            grid.blocks[t].ydir = 0
                        }
                    }
                }
                if (keysPressed['g']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            grid.blocks[t].belt = 1
                            grid.blocks[t].xdir = 0
                            grid.blocks[t].ydir = -1
                        }
                    }
                }
                if (keysPressed['b']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            grid.blocks[t].belt = 1
                            grid.blocks[t].xdir = 0
                            grid.blocks[t].ydir = 1
                        }
                    }
                }
                if (keysPressed['r']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            candyman.structures.push(new Arm(grid.blocks[t]))
                            candyman.selectedindex++
                        }
                    }
                }
                if (keysPressed['/']) {
                    for (let t = 0; t < grid.blocks.length; t++) {
                        if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                            candyman.structures.push(new Train(grid.blocks[t]))
                            candyman.selectedindex++
                        }
                    }
                }



            }

            if (keysPressed['z']) {
                menu.selector = 12
            }
            // this.belt = 1
            // if(Math.random()<.3){
            //     this.xdir = 1
            // }else if(Math.random()<.3){
            //     this.xdir = -1
            // }else{
            //     this.xdir = 0
            //     if(Math.random()<.3){
            //         this.ydir = 1
            //     }else if(Math.random()<.3){
            //         this.ydir = -1
            //     }else{
            //         this.ydir = 0
            window.addEventListener('pointermove', track);
            //     }
        });
        window.addEventListener('pointermove', continued_stimuli);

        window.addEventListener('pointerup', e => {

            pointeron = 0
            window.removeEventListener('pointermove', track);
            // window.removeEventListener("pointermove", continued_stimuli);
        })
        function tooltip() {
            drawcheck = 0

            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].spigot > 0) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        if (grid.blocks[t].spigot == 1) {
                            tooltiptext = "Hydrogen Source"
                        }
                        if (grid.blocks[t].spigot == 2) {
                            tooltiptext = "Oxygen Source"
                        }
                        if (grid.blocks[t].spigot == 3) {
                            tooltiptext = "Carbon Source"
                        }
                        if (grid.blocks[t].spigot == 4) {
                            tooltiptext = "Nitrogen Source"
                        }
                        if (grid.blocks[t].spigot == 5) {
                            tooltiptext = "Phosphorous Source"
                        }
                        if (grid.blocks[t].spigot == 6) {
                            tooltiptext = "Sulfur Source"
                        }
                        drawcheck = 1
                    }
                }
            }
            if (menuon == 1) {
                for (let t = 0; t < menu.blocks.length; t++) {
                    if (menu.blocks[t].isPointInside(TIP_engine)) {
                        if (t == 0) {
                            tooltiptext = "Mechanical Arm"
                        }
                        if (t == 1) {
                            tooltiptext = "Belt Right"
                        }
                        if (t == 2) {
                            tooltiptext = "Belt Left"
                        }
                        if (t == 3) {
                            tooltiptext = "Belt Up"
                        }
                        if (t == 4) {
                            tooltiptext = "Belt Down"
                        }
                        if (t == 5) {
                            tooltiptext = "Ethylene Assembler"
                        }
                        if (t == 6) {
                            tooltiptext = "Carbon Dioxide Assembler"
                        }
                        if (t == 7) {
                            tooltiptext = "Water Assembler"
                        }
                        if (t == 8) {
                            tooltiptext = "Glucose Assembler"
                        }
                        if (t == 9) {
                            tooltiptext = "Citric Acid Assembler"
                        }
                        if (t == 10) {
                            tooltiptext = "Ethanol Assembler"
                        }
                        if (t == 11) {
                            tooltiptext = "Score Cup"
                        }
                        if (t == 12) {
                            tooltiptext = "Delete Structure"
                        }
                        if (t == 13) {
                            tooltiptext = "Nitrous Oxide Assembler"
                        }
                        if (t == 14) {
                            tooltiptext = "Cyanide Assembler"
                        }
                        if (t == 15) {
                            tooltiptext = "Ammonia Assembler"
                        }
                        if (t == 16) {
                            tooltiptext = "Sulfate Assembler"
                        }
                        if (t == 17) {
                            tooltiptext = "Phosphate Assembler"
                        }
                        if (t == 18) {
                            tooltiptext = "Hydrogen Sulfide Assembler"
                        }
                        if (t == 19) {
                            tooltiptext = "Amino Acid Assembler"
                        }
                        if (t == 20) {
                            tooltiptext = "Transporter"
                        }


                        drawcheck = 1
                    }
                }
            }
        }
        function track(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            // console.log(canvas_context.getTransform())
            TIP_engine.x = XS_engine / 3 - canvas_context.getTransform().e / 3
            TIP_engine.y = YS_engine / 3 - canvas_context.getTransform().f / 3
            TIP_engine.body = TIP_engine


            tooltip()



            if (menu.selector == 1) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 1
                        grid.blocks[t].ydir = 0
                    }
                }
            }
            if (menu.selector == 2) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = -1
                        grid.blocks[t].ydir = 0
                    }
                }
            }
            if (menu.selector == 3) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 0
                        grid.blocks[t].ydir = -1
                    }
                }
            }
            if (menu.selector == 4) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 0
                        grid.blocks[t].ydir = 1
                    }
                }
            }


            if (keysPressed['n']) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 1
                        grid.blocks[t].ydir = 0
                    }
                }
            }
            if (keysPressed['v']) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = -1
                        grid.blocks[t].ydir = 0
                    }
                }
            }
            if (keysPressed['g']) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 0
                        grid.blocks[t].ydir = -1
                    }
                }
            }
            if (keysPressed['b']) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 1
                        grid.blocks[t].xdir = 0
                        grid.blocks[t].ydir = 1
                    }
                }
            }
            if (keysPressed['z'] || menu.selector == 12) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                        grid.blocks[t].belt = 0
                        grid.blocks[t].xdir = 0
                        grid.blocks[t].ydir = 0
                    }
                }
            }

        }
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            // console.log(canvas_context.getTransform())
            TIP_engine.x = XS_engine / 3 - canvas_context.getTransform().e / 3
            TIP_engine.y = YS_engine / 3 - canvas_context.getTransform().f / 3
            TIP_engine.body = TIP_engine


            tooltip()
        }
    }
    //     function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    // //         console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
    //         if (typeof object.body != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         } else if (typeof object != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         }
    //     }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }
    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Particle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document

    setUp(setup_canvas) // setting up canvas refrences, starting timer. 

    // object instantiation and creation happens here 

    canvas_context.scale(3, 3)

    class UI {
        constructor() {
            this.body = new Rectangle(candyman.body.x - 100, candyman.body.y + 100, 60, 60, "#888888")
            this.toggle = 0
            this.selector = -1
        }
        draw() {
            if (menuon == 1) {
                this.toggle = 1
            } else {
                this.toggle = 0
                this.selector = -1
            }
            if (this.toggle == 1) {

                this.body = new Rectangle(candyman.body.x - 100, candyman.body.y + 40, 60, 60, "#999999")
                this.body.draw()

                this.blocks = []
                for (let t = 0; t < 25; t++) {
                    let block = new Rectangle(5 + this.body.x + ((t % 5) * 10), 5 + this.body.y + (Math.floor(t / 5) * 10), 10, 10, "#555555")
                    // block.detail = {}
                    block.detail = []
                    if (t == 0) {
                        let detail = new ArmIcon(block)
                        block.detail.push(detail)
                    } else if (t == 1) {

                        let detail = new PolygonClean(block.x + 5 + 1.5, block.y + 5, 1, "yellow", 3, 0, 0, 0, 0)
                        block.detail.push(detail)

                    } else if (t == 2) {
                        let detail = new PolygonClean(block.x + 5 - 1.5, block.y + 5, 1, "yellow", 3, 0, 0, Math.PI, 0)
                        block.detail.push(detail)
                    } else if (t == 3) {
                        let detail = new PolygonClean(block.x + 5, block.y + 3.5, 1, "yellow", 3, 0, 0, Math.PI * 1.5, 0)
                        block.detail.push(detail)
                    } else if (t == 4) {
                        let detail = new PolygonClean(block.x + 5, block.y + 6.5, 1, "yellow", 3, 0, 0, Math.PI * .5, 0)
                        block.detail.push(detail)
                    } else if (t == 5) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 4
                        block.detail.push(detail)
                        let hydro = new Particle(block.x + 7, block.y + 5, .7, "#00ff00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 1
                        let carbon = new Particle(block.x + 3, block.y + 5, .7, "#ff0000", Math.random() - .5, Math.random() - .5)
                        carbon.type = 2
                        block.detail.push(carbon)
                        block.detail.push(hydro)

                    } else if (t == 6) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 5
                        block.detail.push(detail)
                        let hydro = new Particle(block.x + 7, block.y + 5, .7, "#00ff00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 3
                        let carbon = new Particle(block.x + 3, block.y + 5, .7, "#ff0000", Math.random() - .5, Math.random() - .5)
                        carbon.type = 2
                        block.detail.push(carbon)
                        block.detail.push(hydro)
                    } else if (t == 7) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 6
                        block.detail.push(detail)

                        let hydro = new Particle(block.x + 7, block.y + 5, .7, "#00ff00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 1
                        let carbon = new Particle(block.x + 3, block.y + 5, .7, "#ff0000", Math.random() - .5, Math.random() - .5)
                        carbon.type = 3
                        block.detail.push(carbon)
                        block.detail.push(hydro)
                    } else if (t == 8) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 10
                        block.detail.push(detail)

                        let hydro = new Particle(block.x + 7, block.y + 5, 1.4, "#FFFF00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 4
                        let carbon = new Particle(block.x + 3, block.y + 5, 1.2, "#FF00FF", Math.random() - .5, Math.random() - .5)
                        carbon.type = 6
                        block.detail.push(carbon)
                        block.detail.push(hydro)
                    } else if (t == 9) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 11
                        block.detail.push(detail)

                        let hydro = new Particle(block.x + 7, block.y + 5, 1.4, "#00FFFF", Math.random() - .5, Math.random() - .5)
                        hydro.type = 5
                        let carbon = new Particle(block.x + 3, block.y + 5, 1.2, "#FF00FF", Math.random() - .5, Math.random() - .5)
                        carbon.type = 6
                        block.detail.push(carbon)
                        block.detail.push(hydro)
                    } else if (t == 10) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 12
                        block.detail.push(detail)

                        let hydro = new Particle(block.x + 7, block.y + 5, 1.4, "#FFFF00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 4
                        let carbon = new Particle(block.x + 3, block.y + 5, 1.2, "#00FFFF", Math.random() - .5, Math.random() - .5)
                        carbon.type = 5
                        block.detail.push(carbon)
                        block.detail.push(hydro)
                    } else if (t == 11) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 21
                        block.detail.push(detail)
                    } else if (t == 12) {
                        let detail = new Circles(block.x + 5, block.y + 5, 2)
                        detail.type = 109
                        block.detail.push(detail)
                    } else if (t == 13) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 14
                        block.detail.push(detail)

                        let nitro = new Particle(block.x + 7, block.y + 5, .7, "#55FFAA", Math.random() - .5, Math.random() - .5)
                        nitro.type = 13
                        let carbon = new Particle(block.x + 3, block.y + 5, .7, "#FF0000", Math.random() - .5, Math.random() - .5)
                        carbon.type = 3
                        block.detail.push(carbon)
                        block.detail.push(nitro)
                    } else if (t == 14) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 15
                        block.detail.push(detail)
                        let nitro = new Particle(block.x + 7, block.y + 5, .7, "#55FFAA", Math.random() - .5, Math.random() - .5)
                        nitro.type = 13
                        let hydro = new Particle(block.x + 3, block.y + 5, .7, "#00FF00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 2
                        block.detail.push(hydro)
                        block.detail.push(nitro)
                    } else if (t == 15) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 16
                        block.detail.push(detail)
                        let nitro = new Particle(block.x + 7, block.y + 5, .7, "#55FFAA", Math.random() - .5, Math.random() - .5)
                        nitro.type = 13
                        let oxy = new Particle(block.x + 3, block.y + 5, .7, "#0000FF", Math.random() - .5, Math.random() - .5)
                        oxy.type = 1
                        block.detail.push(oxy)
                        block.detail.push(nitro)
                    } else if (t == 16) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 1003
                        block.detail.push(detail)
                        let sulfur = new Particle(block.x + 7, block.y + 5, .8, "#FFBB44", Math.random() - .5, Math.random() - .5)
                        sulfur.type = 1002
                        let oxy = new Particle(block.x + 3, block.y + 5, .7, "#0000FF", Math.random() - .5, Math.random() - .5)
                        oxy.type = 3
                        block.detail.push(oxy)
                        block.detail.push(sulfur)
                    } else if (t == 17) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 1005
                        block.detail.push(detail)
                        let phosphorous = new Particle(block.x + 7, block.y + 5, .8, "#FF00AA", Math.random() - .5, Math.random() - .5)
                        phosphorous.type = 1001
                        let oxy = new Particle(block.x + 3, block.y + 5, .7, "#0000FF", Math.random() - .5, Math.random() - .5)
                        oxy.type = 3
                        block.detail.push(oxy)
                        block.detail.push(phosphorous)
                    } else if (t == 18) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 1006
                        block.detail.push(detail)
                        let sulfur = new Particle(block.x + 7, block.y + 5, .8, "#FFBB44", Math.random() - .5, Math.random() - .5)
                        sulfur.type = 1002
                        let hydro = new Particle(block.x + 3, block.y + 5, .7, "#00FF00", Math.random() - .5, Math.random() - .5)
                        hydro.type = 1
                        block.detail.push(hydro)
                        block.detail.push(sulfur)
                    } else if (t == 19) {
                        let detail = new Circles(block.x + 5, block.y + 5, 4)
                        detail.type = 1007
                        block.detail.push(detail)

                        let cyanide = new Particle(block.x + 7, block.y + 5, 1.4, "#FFAAFF", Math.random() - .5, Math.random() - .5)
                        cyanide.type = 18
                        let water = new Particle(block.x + 3, block.y + 5, 1.4, "#00FFFF", Math.random() - .5, Math.random() - .5)
                        water.type = 6
                        block.detail.push(cyanide)
                        block.detail.push(water)
                    } else if (t == 20) {
                        let detail = new Rectangle(block.x + 2.5, block.y + 2.5, 5, 5, "white")
                        block.detail.push(detail)
                    } else {
                        let detail = new Circles(block.x + 5, block.y + 5, 5)
                        detail.type = 0
                        detail.color = "transparent"
                        block.detail.push(detail)


                    }
                    this.blocks.push(block)
                }
                for (let t = 0; t < this.blocks.length; t++) {
                    if (this.selector == t) {
                        this.blocks[t].color = "#AAAAAA"
                    }
                    this.blocks[t].draw()
                    for (let d = 0; d < this.blocks[t].detail.length; d++) {
                        this.blocks[t].detail[d].draw()
                    }
                }



            }
        }
    }

    class Player {
        constructor() {
            this.booze = 0
            this.sweet = 0
            this.sour = 0
            this.water = 0
            this.fizz = 0
            this.body = new Particle(100, 100, 4, "#FFFFFF")
            this.body.type = 28
            this.tile = grid.blocks[Math.round(grid.w * 11.16)]
            this.structures = []
            this.selectedindex = -1
            this.mod = 0
        }
        draw() {

            canvas_context.fillStyle = "#FFFFFF"
            canvas_context.font = "5px arial"
            if (this.booze < 100 || this.sweet < 40 || this.sour < 25 || this.water < 100 || this.fizz < 50) {
                canvas_context.fillText(`Alcohol: ${this.booze}/100, Glucose: ${this.sweet}/40, Citric Acid: ${this.sour}/25, Water: ${this.water}/100, Carbon Dioxide: ${this.fizz}/50`, this.body.x - 200, this.body.y - 110)
            } else {
                canvas_context.fillText(`Congratulations, free drinks! Thank you for playing!`, this.body.x - 200, this.body.y - 110)
            }

            this.body.x = this.tile.glob.x
            this.body.y = this.tile.glob.y

            this.body.draw()
            this.dispx = this.body.x
            this.dispy = this.body.y
            this.mod++
            if (keysPressed['w']) {
                this.body.y -= this.tile.body.height
                TIP_engine.y -= this.tile.body.height
            }
            if (keysPressed['a']) {
                this.body.x -= this.tile.body.width
                TIP_engine.x -= this.tile.body.width
            }
            if (keysPressed['s']) {
                this.body.y += this.tile.body.height
                TIP_engine.y += this.tile.body.height
            }
            if (keysPressed['d']) {
                this.body.x += this.tile.body.width
                TIP_engine.x += this.tile.body.width
            }

            let wet = 0
            for (let t = 0; t < this.tile.neighbors.length; t++) {
                if (grid.blocks[this.tile.neighbors[t]].mglob.isPointInside(this.body)) {
                    this.tile = grid.blocks[this.tile.neighbors[t]]
                    wet = 1

                    if (pointeron == 1) {

                        if (menu.selector == 1) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 1
                                    grid.blocks[t].ydir = 0
                                }
                            }
                        }
                        if (menu.selector == 2) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = -1
                                    grid.blocks[t].ydir = 0
                                }
                            }
                        }
                        if (menu.selector == 3) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 0
                                    grid.blocks[t].ydir = -1
                                }
                            }
                        }
                        if (menu.selector == 4) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 0
                                    grid.blocks[t].ydir = 1
                                }
                            }
                        }


                        if (keysPressed['n']) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 1
                                    grid.blocks[t].ydir = 0
                                }
                            }
                        }
                        if (keysPressed['v']) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = -1
                                    grid.blocks[t].ydir = 0
                                }
                            }
                        }
                        if (keysPressed['g']) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 0
                                    grid.blocks[t].ydir = -1
                                }
                            }
                        }
                        if (keysPressed['b']) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 1
                                    grid.blocks[t].xdir = 0
                                    grid.blocks[t].ydir = 1
                                }
                            }
                        }
                        if (keysPressed['z'] || menu.selector == 12) {
                            for (let t = 0; t < grid.blocks.length; t++) {
                                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                                    grid.blocks[t].belt = 0
                                    grid.blocks[t].xdir = 0
                                    grid.blocks[t].ydir = 0
                                }
                            }
                        }

                    }
                }
            }
            if (wet == 0) {
                for (let t = 0; t < grid.blocks.length; t++) {
                    if (grid.blocks[t].mglob.isPointInside(this.body)) {
                        this.tile = grid.blocks[t]
                    }
                }


            }



            this.body.x = this.tile.glob.x
            this.body.y = this.tile.glob.y
            this.dispx = this.dispx - this.tile.glob.x
            this.dispy = this.dispy - this.tile.glob.y
            for (let t = 0; t < this.structures.length; t++) {
                this.structures[t].draw()
            }
            canvas_context.translate(this.dispx, this.dispy)
        }
    }

    class Grid {
        constructor(scale) {
            this.blocks = []
            let w = 1280 / scale
            let h = 1280 / scale
            this.w = w
            this.scale = scale
            for (let t = 0; t < w * h; t++) {

                let brick = new Atom((t % w) * scale, Math.floor(t / w) * scale, scale, scale, "#292929")
                brick.index = this.blocks.length
                this.blocks.push(brick)
            }
            for (let t = 0; t < this.blocks.length; t++) {
                for (let index = Math.max(t - 129, 0); index < Math.min(t + 129, this.blocks.length); index++) {
                    if (index != t) {
                        if (this.blocks[t].glob.doesPerimeterTouch(this.blocks[index].glob)) {
                            if (!this.blocks[t].neighbors.includes(index)) {
                                if (!this.blocks[index].neighbors.includes(t)) {
                                    this.blocks[t].neighbors.push(index)
                                    this.blocks[index].neighbors.push(t)
                                }
                            }
                        }
                    }
                }

            }
            for (let t = 0; t < 1; t++) {
                this.perlin()
            }
            this.giveAtoms()


        }
        giveAtoms() {
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].getAtoms()
            }

        }
        perlin() {
            let jiggler = 400
            // let realcount = 0
            for (let h = 0; h < jiggler; h++) {
                for (let t = 0; t < this.blocks.length; t++) {
                    // let index = Math.floor(Math.random() * this.blocks.length)
                    // while (index == t) {
                    //     index = Math.floor(Math.random() * this.blocks.length)
                    // }
                    // for(let k = 0;k<this.blocks.length;k++){
                    // if(t!= k){
                    if (this.blocks[t].hydrogen > 200 || this.blocks[t].carbon > 200 || this.blocks[t].oxygen > 200 || this.blocks[t].nitrogen > 200 || this.blocks[t].sulfur > 200 || this.blocks[t].phosphorous > 200) {
                        // if (this.blocks[t].glob.doesPerimeterTouch(this.blocks[index].glob)) {
                            // if (!this.blocks[t].neighbors.includes(index)) {
                            //     this.blocks[t].neighbors.push(index)
                            //     this.blocks[index].neighbors.push(t)
                            // }
                        if(Math.random() > .5){

                            for (let index = 0; index < this.blocks[t].neighbors.length; index++) {
                                let split = 12.5
                                this.blocks[this.blocks[t].neighbors[index]].hydrogen += this.blocks[t].hydrogen / split
                                this.blocks[t].hydrogen -= this.blocks[t].hydrogen / split
                                if (this.blocks[t].hydrogen < 140) {
                                    this.blocks[t].hydrogen = 0
                                }
                                let slpat = 14.5
                                this.blocks[this.blocks[t].neighbors[index]].oxygen += this.blocks[t].oxygen / slpat
                                this.blocks[t].oxygen -= this.blocks[t].oxygen / slpat
                                if (this.blocks[t].oxygen < 140) {
                                    this.blocks[t].oxygen = 0
                                }
                                let splut = 13.5
                                this.blocks[this.blocks[t].neighbors[index]].carbon += this.blocks[t].carbon / splut
                                this.blocks[t].carbon -= this.blocks[t].carbon / splut
                                if (this.blocks[t].carbon < 140) {
                                    this.blocks[t].carbon = 0
                                }
                                let splot = 13.5
                                this.blocks[this.blocks[t].neighbors[index]].nitrogen += this.blocks[t].nitrogen / splot
                                this.blocks[t].nitrogen -= this.blocks[t].nitrogen / splot
                                if (this.blocks[t].nitrogen < 140) {
                                    this.blocks[t].nitrogen = 0
                                }
                                let splpt = 12.5
                                this.blocks[this.blocks[t].neighbors[index]].phosphorous += this.blocks[t].phosphorous / splpt
                                this.blocks[t].phosphorous -= this.blocks[t].phosphorous / splpt
                                if (this.blocks[t].phosphorous < 140) {
                                    this.blocks[t].phosphorous = 0
                                }
                                let splst = 13
                                this.blocks[this.blocks[t].neighbors[index]].sulfur += this.blocks[t].sulfur / splst
                                this.blocks[t].sulfur -= this.blocks[t].sulfur / splst
                                if (this.blocks[t].sulfur < 140) {
                                    this.blocks[t].sulfur = 0
                                }
                            }
                        }else{

                            for (let index = this.blocks[t].neighbors.length-1;index > 0; index--) {
                                let split = 12.5
                                this.blocks[this.blocks[t].neighbors[index]].hydrogen += this.blocks[t].hydrogen / split
                                this.blocks[t].hydrogen -= this.blocks[t].hydrogen / split
                                if (this.blocks[t].hydrogen < 140) {
                                    this.blocks[t].hydrogen = 0
                                }
                                let slpat = 14.5
                                this.blocks[this.blocks[t].neighbors[index]].oxygen += this.blocks[t].oxygen / slpat
                                this.blocks[t].oxygen -= this.blocks[t].oxygen / slpat
                                if (this.blocks[t].oxygen < 140) {
                                    this.blocks[t].oxygen = 0
                                }
                                let splut = 13.5
                                this.blocks[this.blocks[t].neighbors[index]].carbon += this.blocks[t].carbon / splut
                                this.blocks[t].carbon -= this.blocks[t].carbon / splut
                                if (this.blocks[t].carbon < 140) {
                                    this.blocks[t].carbon = 0
                                }
                                let splot = 13.5
                                this.blocks[this.blocks[t].neighbors[index]].nitrogen += this.blocks[t].nitrogen / splot
                                this.blocks[t].nitrogen -= this.blocks[t].nitrogen / splot
                                if (this.blocks[t].nitrogen < 140) {
                                    this.blocks[t].nitrogen = 0
                                }
                                let splpt = 12.5
                                this.blocks[this.blocks[t].neighbors[index]].phosphorous += this.blocks[t].phosphorous / splpt
                                this.blocks[t].phosphorous -= this.blocks[t].phosphorous / splpt
                                if (this.blocks[t].phosphorous < 140) {
                                    this.blocks[t].phosphorous = 0
                                }
                                let splst = 13
                                this.blocks[this.blocks[t].neighbors[index]].sulfur += this.blocks[t].sulfur / splst
                                this.blocks[t].sulfur -= this.blocks[t].sulfur / splst
                                if (this.blocks[t].sulfur < 140) {
                                    this.blocks[t].sulfur = 0
                                }
                            }
                        }



                        // }
                    } else {

                    }
                    // }
                    // }

                }
            }
        }
        draw() {
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].draw()
            }

            canvas_context.beginPath()
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].runBelt()
            }
            canvas_context.stroke()
            canvas_context.closePath()

            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].cleandots()
            }
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].atomize()
            }
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].molecularize()
            }
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].compmolecularize()
            }
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].cleandots()
            }
            for (let t = 0; t < this.blocks.length; t++) {
                this.blocks[t].freeDots()
            }
        }
    }

    class Assembler {
        constructor(tile) {
            this.tile = tile
            this.body = new Circles(this.tile.glob.x, this.tile.glob.y, this.tile.body.width * .5, "#FFFF00")
            // this.body.type = 4
            this.tile.assembler = 1
        }
        draw() {
            this.body.draw()
            this.make()
        }
        make() {
            // for(let t = 0;t<this.tile.dots.length;t++){
            if (this.body.type == 4) {
                if (this.tile.hydrogen >= 200) {
                    if (this.tile.carbon >= 100) {
                        this.tile.carbon -= 100
                        this.tile.hydrogen -= 200
                        let acetyl = new Particle(this.tile.glob.x, this.tile.glob.y, 1.5, "#FFFF00", Math.random() - .5, Math.random() - .5)
                        acetyl.type = 4
                        this.tile.mols.push(acetyl)
                    }
                }
            }
            if (this.body.type == 5) {
                if (this.tile.oxygen >= 100) {
                    if (this.tile.carbon >= 50) {
                        this.tile.oxygen -= 100
                        this.tile.carbon -= 50
                        let co2 = new Particle(this.tile.glob.x, this.tile.glob.y, 1.3, "#FF00FF", Math.random() - .5, Math.random() - .5)
                        co2.type = 5
                        this.tile.mols.push(co2)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 6) {
                if (this.tile.oxygen >= 50) {
                    if (this.tile.hydrogen >= 100) {
                        this.tile.oxygen -= 50
                        this.tile.hydrogen -= 100
                        let h20 = new Particle(this.tile.glob.x, this.tile.glob.y, 1.1, "#00FFFF", Math.random() - .5, Math.random() - .5)
                        h20.type = 6
                        this.tile.mols.push(h20)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 14) {
                if (this.tile.nitrogen >= 50) {
                    if (this.tile.oxygen >= 100) {
                        this.tile.nitrogen -= 50
                        this.tile.oxygen -= 100
                        let NO2 = new Particle(this.tile.glob.x, this.tile.glob.y, 1.25, "#99AAFF", Math.random() - .5, Math.random() - .5)
                        NO2.type = 17
                        this.tile.mols.push(NO2)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 15) {
                if (this.tile.nitrogen >= 50) {
                    if (this.tile.carbon >= 50) {
                        this.tile.nitrogen -= 50
                        this.tile.carbon -= 50
                        let cyanide = new Particle(this.tile.glob.x, this.tile.glob.y, 1.45, "#FFAAFF", Math.random() - .5, Math.random() - .5)
                        cyanide.type = 18
                        this.tile.mols.push(cyanide)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 16) {
                if (this.tile.nitrogen >= 50) {
                    if (this.tile.hydrogen >= 200) {
                        this.tile.nitrogen -= 50
                        this.tile.hydrogen -= 200
                        let ammonia = new Particle(this.tile.glob.x, this.tile.glob.y, 1.45, "#FF7744", Math.random() - .5, Math.random() - .5)
                        ammonia.type = 19
                        this.tile.mols.push(ammonia)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 1003) {
                if (this.tile.sulfur >= 50) {
                    if (this.tile.oxygen >= 200) {
                        this.tile.sulfur -= 50
                        this.tile.oxygen -= 200
                        let sulfate = new Particle(this.tile.glob.x, this.tile.glob.y, 1.7, "#FFCC88", Math.random() - .5, Math.random() - .5)
                        sulfate.type = 1004
                        this.tile.mols.push(sulfate)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 1005) {
                if (this.tile.phosphorous >= 50) {
                    if (this.tile.oxygen >= 200) {
                        this.tile.phosphorous -= 50
                        this.tile.oxygen -= 200
                        let phosphate = new Particle(this.tile.glob.x, this.tile.glob.y, 1.7, "#FFAAAA", Math.random() - .5, Math.random() - .5)
                        phosphate.type = 1005
                        this.tile.mols.push(phosphate)
                    }
                }
                // console.log(this.tile)
            }
            if (this.body.type == 1006) {
                if (this.tile.sulfur >= 50) {
                    if (this.tile.hydrogen >= 100) {
                        this.tile.sulfur -= 50
                        this.tile.hydrogen -= 100
                        let sulfurhydro = new Particle(this.tile.glob.x, this.tile.glob.y, 1.8, "#AAAA00", Math.random() - .5, Math.random() - .5)
                        sulfurhydro.type = 1006
                        this.tile.mols.push(sulfurhydro)
                    }
                }
                // console.log(this.tile)
            }
            // }
        }
    }

    class Compssembler {
        constructor(tile) {
            this.tile = tile
            this.body = new Circles(this.tile.glob.x, this.tile.glob.y, this.tile.body.width * .5, "#FFFF00")
            // this.body.type = 4
            this.tile.compssembler = 1
        }
        draw() {
            this.body.draw()
            this.make()
        }
        make() {
            // for(let t = 0;t<this.tile.dots.length;t++){
            if (this.body.type == 10) {
                let co2sum = 0
                let etysum = 0
                let co2ind = []
                let etyind = []
                for (let t = 0; t < this.tile.mols.length; t++) {
                    if (this.tile.mols[t].type == 4 && etysum < 3) {
                        etysum++
                        etyind.push(t)
                    }
                    if (this.tile.mols[t].type == 5 && co2sum < 3) {
                        co2sum++
                        co2ind.push(t)
                    }
                }
                if (etysum >= 3) {
                    if (co2sum >= 3) {

                        for (let t = 0; t < this.tile.mols.length; t++) {
                            if (co2ind.includes(t) || etyind.includes(t)) {
                                this.tile.mols[t].marked = 1
                            }
                        }
                        let glucose = new Particle(this.tile.glob.x, this.tile.glob.y, 1.9, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                        glucose.type = 10
                        this.tile.compmols.push(glucose)
                    }
                }
            }
            if (this.body.type == 11) {
                let co2sum = 0
                let etysum = 0
                let co2ind = []
                let etyind = []
                for (let t = 0; t < this.tile.mols.length; t++) {
                    if (this.tile.mols[t].type == 6 && etysum < 2) {
                        etysum++
                        etyind.push(t)
                    }
                    if (this.tile.mols[t].type == 5 && co2sum < 3) {
                        co2sum++
                        co2ind.push(t)
                    }
                }
                if (etysum >= 2) {
                    if (co2sum >= 3) {

                        for (let t = 0; t < this.tile.mols.length; t++) {
                            if (co2ind.includes(t) || etyind.includes(t)) {
                                this.tile.mols[t].marked = 1
                            }
                        }
                        let citricacid = new Particle(this.tile.glob.x, this.tile.glob.y, 1.8, "#FFAA00", Math.random() - .5, Math.random() - .5)
                        citricacid.type = 11
                        this.tile.compmols.push(citricacid)
                    }
                }
            }
            if (this.body.type == 12) {
                let co2sum = 0
                let etysum = 0
                let co2ind = []
                let etyind = []
                for (let t = 0; t < this.tile.mols.length; t++) {
                    if (this.tile.mols[t].type == 4 && etysum < 1) {
                        etysum++
                        etyind.push(t)
                    }
                    if (this.tile.mols[t].type == 6 && co2sum < 1) {
                        co2sum++
                        co2ind.push(t)
                    }
                }
                if (etysum >= 1) {
                    if (co2sum >= 1) {

                        for (let t = 0; t < this.tile.mols.length; t++) {
                            if (co2ind.includes(t) || etyind.includes(t)) {
                                this.tile.mols[t].marked = 1
                            }
                        }
                        let citricacid = new Particle(this.tile.glob.x, this.tile.glob.y, 1.7, "#AAFF00", Math.random() - .5, Math.random() - .5)
                        citricacid.type = 12
                        this.tile.compmols.push(citricacid)
                    }
                }
            }
            if (this.body.type == 1007) {
                let cyanidesum = 0
                let watersum = 0
                let cyanideind = []
                let waterind = []
                for (let t = 0; t < this.tile.mols.length; t++) {
                    if (this.tile.mols[t].type == 6 && watersum < 2) {
                        watersum++
                        waterind.push(t)
                    }
                    if (this.tile.mols[t].type == 18 && cyanidesum < 2) {
                        cyanidesum++
                        cyanideind.push(t)
                    }
                }
                if (watersum >= 2) {
                    if (cyanidesum >= 2) {

                        for (let t = 0; t < this.tile.mols.length; t++) {
                            if (cyanideind.includes(t) || waterind.includes(t)) {
                                this.tile.mols[t].marked = 1
                            }
                        }
                        let aminoacid = new Particle(this.tile.glob.x, this.tile.glob.y, 1.7, "#00AAAA", Math.random() - .5, Math.random() - .5)
                        aminoacid.type = 1007
                        this.tile.compmols.push(aminoacid)
                    }
                }
            }
        }
    }
    class Cup {
        constructor(tile) {
            this.tile = tile
            this.body = new Circles(this.tile.glob.x, this.tile.glob.y, this.tile.body.width * .5, "#FFFF00")
            this.body.type = 21
            this.tile.compssembler = 1
        }
        draw() {
            this.body.draw()
            this.make()
        }
        make() {
            let booze = 0
            let sweet = 0
            let sour = 0
            let water = 0
            let fizz = 0
            for (let t = 0; t < this.tile.mols.length; t++) {
                if (this.tile.mols[t].type == 6) {
                    water++
                }
                if (this.tile.mols[t].type == 5) {
                    fizz++
                }
            }
            for (let t = 0; t < this.tile.compmols.length; t++) {
                if (this.tile.compmols[t].type == 10) {
                    sweet++
                }
                if (this.tile.compmols[t].type == 11) {
                    sour++
                }
                if (this.tile.compmols[t].type == 12) {
                    booze++
                }
            }
            candyman.fizz = fizz
            candyman.booze = booze
            candyman.sour = sour
            candyman.sweet = sweet
            candyman.water = water
        }
    }
    class Train {
        constructor(tile) {
            this.tile = tile
            this.endtile = tile
            trainBackLink = tile
            this.body = new Rectangle(this.tile.body.x, this.tile.body.y, this.tile.body.width, this.tile.body.height, "white")
            this.bodyball = new Circle(this.tile.body.x + 5, this.tile.body.y + 5, 7, "#FFFFFF22")
            this.bodyball.type = 666
            this.timer = 0
            this.lock = 0
            this.line = new LineOP(this.bodyball, TIP_engine, "red", 1)
            this.event = 0
        }
        draw() {
            if (this.tile != this.endtile) {
                this.timer++
            }
            if (candyman.structures.indexOf(this) == candyman.selectedindex) {
                if (this.lock == 0) {
                    this.line.draw()
                    if (this.event == 1) {
                        this.endtile = trainBackLink
                        this.lock = 1
                    }
                }
            } else {
                this.lock = 1
            }
            canvas_context.strokeStyle = 'white' //this.body.color
            canvas_context.lineWidth = 1.5
            canvas_context.strokeRect(this.tile.body.x, this.tile.body.y, this.tile.body.width, this.tile.body.height)
            canvas_context.strokeStyle = "gray"
            canvas_context.strokeRect(this.endtile.body.x, this.endtile.body.y, this.endtile.body.width, this.endtile.body.height)
            this.bodyball.draw()
            if (this.timer > 80) {

                this.endtile.hydrogen += this.tile.hydrogen
                this.tile.hydrogen = 0
                this.endtile.nitrogen += this.tile.nitrogen
                this.tile.nitrogen = 0
                this.endtile.carbon += this.tile.carbon
                this.tile.carbon = 0
                this.endtile.oxygen += this.tile.oxygen
                this.tile.oxygen = 0
                this.endtile.phosphorous += this.tile.phosphorous
                this.tile.phosphorous = 0
                this.endtile.sulfur += this.tile.sulfur
                this.tile.sulfur = 0
                this.timer = 0

                if (this.tile != this.endtile) {
                    for (let t = 0; t < this.tile.mols.length; t++) {
                        this.endtile.mols.push(this.tile.mols[t])
                        this.tile.mols[t].x -= this.tile.body.x - this.endtile.body.x
                        this.tile.mols[t].y -= this.tile.body.y - this.endtile.body.y
                    }
                    for (let t = 0; t < this.tile.compmols.length; t++) {
                        this.endtile.compmols.push(this.tile.compmols[t])
                        this.tile.compmols[t].x -= this.tile.body.x - this.endtile.body.x
                        this.tile.compmols[t].y -= this.tile.body.y - this.endtile.body.y
                    }
                    this.tile.compmols = []
                    this.tile.mols = []
                }

                let seap = this.tile
                this.tile = this.endtile
                this.endtile = seap
            } else if (this.timer > 45) {

                this.bodyball.color = "#FF000020"
                this.bodyball.radius *= .99
                if (this.bodyball.radius <= 6) {
                    this.bodyball.radius = 6
                }

            } else if (this.timer > 25) {
                let vec = new Vector(this.bodyball, ((this.endtile.body.x + 5) - this.bodyball.x) / 50, ((this.endtile.body.y + 5) - this.bodyball.y) / 50)
                if (vec.xmom + vec.ymom != 0) {
                    vec.normalize(((new LineOP(this.tile.body, this.endtile.body, "red", 1)).hypotenuse()) / 10)
                    if (((new LineOP(this.bodyball, this.endtile.body, "red", 1)).hypotenuse()) > 9) {
                        this.bodyball.x += vec.xmom
                        this.bodyball.y += vec.ymom
                        this.bodyball.color = "#00FF0020"
                    } else {
                        this.bodyball.x = this.endtile.body.x + 5
                        this.bodyball.y = this.endtile.body.y + 5
                        this.body.x = this.endtile.body.x
                        this.body.y = this.endtile.body.y
                        this.bodyball.color = "#FF000020"
                        this.bodyball.radius *= .98
                        if (this.bodyball.radius <= 5) {
                            this.bodyball.radius = 5
                        }
                    }
                    // for(let t = 0;t<this.tile.dots.length;t++){
                    //     this.tile.dots[t].x += vec.xmom
                    //     this.tile.dots[t].y += vec.ymom
                    // }
                }

            } else {
                this.bodyball.color = "#FFFF0020"
                this.bodyball.radius *= 1.015
                if (this.bodyball.radius >= 11) {
                    this.bodyball.radius = 11
                }
            }
        }
    }

    class Vector { // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0, 0)), xmom = 0, ymom = 0) {
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point) {
            let link = new LineOP(this.object, point)
            let dis1 = link.sqrDis()
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.sqrDis()
            if (dis2 < dis1) {
                return true
            } else {
                return false
            }
        }
        rotate(angleGoal) {
            let link = new Line(this.xmom, this.ymom, 0, 0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude() {
            return (new Line(this.xmom, this.ymom, 0, 0)).hypotenuse()
        }
        normalize(size = 1) {
            let magnitude = this.magnitude()
            this.xmom /= magnitude
            this.ymom /= magnitude
            this.xmom *= size
            this.ymom *= size
        }
        multiply(vect) {
            let point = new Point(0, 0)
            let end = new Point(this.xmom + vect.xmom, this.ymom + vect.ymom)
            return point.pointDistance(end)
        }
        add(vect) {
            return new Vector(this.object, this.xmom + vect.xmom, this.ymom + vect.ymom)
        }
        subtract(vect) {
            return new Vector(this.object, this.xmom - vect.xmom, this.ymom - vect.ymom)
        }
        divide(vect) {
            return new Vector(this.object, this.xmom / vect.xmom, this.ymom / vect.ymom) //be careful with this, I don't think this is right
        }
        draw() {
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link = new LineOP(this.object, dummy, "#FFFFFF", 1)
            link.draw()
        }
    }
    class Arm {
        constructor(tile) {
            this.grip = -10
            this.timer = 0
            this.time = 40
            this.tile = tile
            this.xdir = 0
            this.ydir = -1
            this.nodes = []
            this.angle = 1
            this.subind = Math.floor(Math.random() * 1280)
            this.center = new Particle(this.tile.glob.x, this.tile.glob.y, 2, "#FFFFFF")
            this.crotch = new Particle(this.tile.glob.x, this.tile.glob.y, .7, "#FFFFFF")

            this.lp = new Particle(this.tile.glob.x, this.tile.glob.y, .7, "#FFFFFF")
            this.rp = new Particle(this.tile.glob.x, this.tile.glob.y, .7, "#FFFFFF")
            this.lf = new Particle(this.tile.glob.x, this.tile.glob.y, .7, "#FFFFFF")
            this.rf = new Particle(this.tile.glob.x, this.tile.glob.y, .7, "#FFFFFF")
            this.g = new Particle(this.tile.glob.x, this.tile.glob.y, 2, "#FFFFFF")
            this.nodes.push(this.center)
            this.nodes.push(this.crotch)
            this.nodes.push(this.lp)
            this.nodes.push(this.rp)
            this.nodes.push(this.lf)
            this.nodes.push(this.rf)
            this.length = 24
            this.particle = new Particle(-10000, -10000, 1, "#FFFFFF")
            this.particle.type = 0
            this.links = []
            let link = new LineOP(this.center, this.crotch, "#AAAAAA", .5)
            this.links.push(link)
            let link2 = new LineOP(this.crotch, this.lp, "#AAAAAA", .5)
            this.links.push(link2)
            let link3 = new LineOP(this.crotch, this.rp, "#AAAAAA", .5)
            this.links.push(link3)
            let link4 = new LineOP(this.rp, this.rf, "#AAAAAA", .5)
            this.links.push(link4)
            let link5 = new LineOP(this.lp, this.lf, "#AAAAAA", .5)
            this.links.push(link5)
            this.startangle = Math.random() * Math.PI * 2
            this.endangle = Math.random() * Math.PI * 2
        }
        drop() {

            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].body.isPointInside(this.g)) {
                    if (this.particle.type == 4) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 5) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 6) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 17) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 18) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 19) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 1004) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 1005) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 1006) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 1007) {
                        grid.blocks[t].mols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 10) {
                        grid.blocks[t].compmols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 11) {
                        grid.blocks[t].compmols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 12) {
                        grid.blocks[t].compmols.unshift(this.particle.copy())
                    }
                    if (this.particle.type == 1) {
                        grid.blocks[t].hydrogen += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }
                    if (this.particle.type == 2) {
                        grid.blocks[t].carbon += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }
                    if (this.particle.type == 3) {
                        grid.blocks[t].oxygen += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }
                    if (this.particle.type == 13) {
                        grid.blocks[t].nitrogen += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }
                    if (this.particle.type == 1001) {
                        grid.blocks[t].phosphorous += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }
                    if (this.particle.type == 1002) {
                        grid.blocks[t].sulfur += 50
                        grid.blocks[t].dots.unshift(this.particle.copy())
                        // this.particle.marked = 1
                        // this.particle.type = 0
                    }

                    if (this.particle.type == 1) {
                        grid.blocks[this.subind].hydrogen -= 50
                    }
                    if (this.particle.type == 2) {
                        grid.blocks[this.subind].carbon -= 50
                    }
                    if (this.particle.type == 3) {
                        grid.blocks[this.subind].oxygen -= 50
                    }
                    if (this.particle.type == 13) {
                        grid.blocks[this.subind].nitrogen -= 50
                    }
                    if (this.particle.type == 1001) {
                        grid.blocks[this.subind].phosphorous -= 50
                    }
                    if (this.particle.type == 1002) {
                        grid.blocks[this.subind].sulfur -= 50
                    }
                    if (this.particle.type == 4) {
                        grid.blocks[this.subind].mols.splice(0, 1)
                    }
                    if (this.particle.type == 5) {
                        grid.blocks[this.subind].mols.splice(0, 1)
                    }
                    if (this.particle.type == 10) {
                        grid.blocks[this.subind].compmols.splice(0, 1)
                    }
                    this.particle.marked = 1
                    // this.particle.type = 0
                    this.particle = new Particle(0, 0, 0, "transparent")
                    this.particle.type = 0

                    grid.blocks[this.subind].cleandots()
                    continue
                    // break
                }
            }
        }
        grab() {
            // if(this.particle.type != 0){
            //     return
            // }

            this.g.x = (this.lf.x + this.rf.x) / 2
            this.g.y = (this.lf.y + this.rf.y) / 2
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].body.isPointInside(this.g)) {
                    if (grid.blocks[t].compssembler == 1 || grid.blocks[t].compmols.length > 0) {

                        if (grid.blocks[t].compmols.length > 0) {
                            this.grip = 16
                            this.particle = grid.blocks[t].compmols[0]
                            this.particle.gripped = 1
                            // this.particle.type = 1
                            this.subind = t
                        }
                    } else if (grid.blocks[t].assembler == 1 || grid.blocks[t].mols.length > 0) {

                        if (grid.blocks[t].mols.length > 0) {
                            this.grip = 16
                            this.particle = grid.blocks[t].mols[0]
                            this.particle.gripped = 1
                            // this.particle.type = 1
                            this.subind = t
                        }
                    } else {
                        if (Math.min(grid.blocks[t].dotwork, grid.blocks[t].dots.length) > 0) {
                            this.grip = 16
                            this.particle = grid.blocks[t].dots[0]
                            this.particle.gripped = 1
                            // this.particle.type = 1

                            this.subind = t
                        }
                    }
                    break

                }
            }

        }
        draw() {
            // if(this.center.isPointInside(TIP_engine)){
            if (candyman.structures.indexOf(this) == candyman.selectedindex) {

                if (keysPressed['i']) {
                    this.startangle += .051
                    if (this.startangle > Math.PI * 2) {
                        this.startangle = 0
                    }
                }
                if (keysPressed['k']) {
                    this.startangle -= .051
                    if (this.startangle < 0) {
                        this.startangle = Math.PI * 2
                    }
                }
                if (keysPressed['u']) {
                    this.length -= .25
                    if (this.length < .5) {
                        this.length = .5
                    }
                }
                if (keysPressed['o']) {
                    this.length += .25
                }
                if (keysPressed['j']) {
                    this.endangle -= .051
                    if (this.endangle < 0) {
                        this.endangle = Math.PI * 2
                    }
                }
                if (keysPressed['l']) {
                    this.endangle += .051
                    if (this.endangle > Math.PI * 2) {
                        this.endangle = 0
                    }
                }

            }
            // }
            this.crotch.x = this.center.x + (Math.cos(this.angle) * this.length)
            this.crotch.y = this.center.y + (Math.sin(this.angle) * this.length)
            if (this.grip == 0) {
                this.lp.x = this.center.x + (Math.cos(this.angle + .15) * this.length * 1.13)
                this.lp.y = this.center.y + (Math.sin(this.angle + .15) * this.length * 1.13)
                this.rp.x = this.center.x + (Math.cos(this.angle - .15) * this.length * 1.13)
                this.rp.y = this.center.y + (Math.sin(this.angle - .15) * this.length * 1.13)
                this.rf.x = this.center.x + (Math.cos(this.angle - .07) * this.length * 1.27)
                this.rf.y = this.center.y + (Math.sin(this.angle - .07) * this.length * 1.27)
                this.lf.x = this.center.x + (Math.cos(this.angle + .07) * this.length * 1.27)
                this.lf.y = this.center.y + (Math.sin(this.angle + .07) * this.length * 1.27)
                this.g.x = this.center.y + (Math.cos(this.angle) * this.length * 1.26)
                this.g.y = this.center.y + (Math.sin(this.angle) * this.length * 1.26)
                this.grip = 1
            } else {

                this.lp.x = this.center.x + (Math.cos(this.angle + .1 + ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.lp.y = this.center.y + (Math.sin(this.angle + .1 + ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rp.x = this.center.x + (Math.cos(this.angle - .1 - ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rp.y = this.center.y + (Math.sin(this.angle - .1 - ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rf.x = this.center.x + (Math.cos(this.angle - .07 - ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.rf.y = this.center.y + (Math.sin(this.angle - .07 - ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.lf.x = this.center.x + (Math.cos(this.angle + .07 + ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.lf.y = this.center.y + (Math.sin(this.angle + .07 + ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.g.x = this.center.y + (Math.cos(this.angle) * this.length * 1.26)
                this.g.y = this.center.y + (Math.sin(this.angle) * this.length * 1.26)
            }

            this.g.x = (this.lf.x + this.rf.x) / 2
            this.g.y = (this.lf.y + this.rf.y) / 2
            // this.grip%=17
            let spinrate = 2
            for (let t = 0; t < spinrate; t++) {

                this.angle += .05
                this.angle %= (6.283 + .07)

                this.particle.x = (this.lf.x + this.rf.x) / 2
                this.particle.y = (this.lf.y + this.rf.y) / 2
                if (this.angle > this.startangle && this.angle < this.startangle + .07) {
                    this.drop()
                    this.grip = 0
                }
                if (this.angle > this.endangle && this.angle < this.endangle + .07) {
                    this.grab()
                    this.grip += .4
                    if (this.grip > 16) {
                        this.grip = 16
                    }
                    this.angle -= .0485
                }
            }
            let point = new Point(this.center.x + (Math.cos(this.startangle) * 5), this.center.y + (Math.sin(this.startangle) * 5))
            let point2 = new Point(this.center.x + (Math.cos(this.endangle) * 5), this.center.y + (Math.sin(this.endangle) * 5))

            let link1 = new LineOP(this.center, point, "#00FF00", .5)
            let link2 = new LineOP(this.center, point2, "#FF0000", .5)
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].draw()
            }
            link2.draw()
            link1.draw()

            if (this.particle.type != 0) {
                this.particle.draw()
            }
        }
    }

    class ArmIcon {
        constructor(tile) {
            this.grip = -10
            this.timer = 0
            this.time = 40
            this.tile = tile
            this.xdir = 0
            this.ydir = -1
            this.nodes = []
            this.angle = 1
            this.subind = Math.floor(Math.random() * 1280)
            this.center = new Particle(this.tile.x + 5, this.tile.y + 5, .52, "#FFFFFF")
            this.crotch = new Particle(this.tile.x + 5, this.tile.y + 5, .17, "#FFFFFF")

            this.lp = new Particle(this.tile.x + 5, this.tile.y + 5, .17, "#FFFFFF")
            this.rp = new Particle(this.tile.x + 5, this.tile.y + 5, .17, "#FFFFFF")
            this.lf = new Particle(this.tile.x + 5, this.tile.y + 5, .17, "#FFFFFF")
            this.rf = new Particle(this.tile.x + 5, this.tile.y + 5, .17, "#FFFFFF")
            this.g = new Particle(this.tile.x + 5, this.tile.y + 5, .52, "#FFFFFF")
            this.nodes.push(this.center)
            this.nodes.push(this.crotch)
            this.nodes.push(this.lp)
            this.nodes.push(this.rp)
            this.nodes.push(this.lf)
            this.nodes.push(this.rf)
            this.length = 3
            this.particle = new Particle(-10000, -10000, 1, "#FFFFFF")
            this.particle.type = 0
            this.links = []
            let link = new LineOP(this.center, this.crotch, "#AAAAAA", .5)
            this.links.push(link)
            let link2 = new LineOP(this.crotch, this.lp, "#AAAAAA", .5)
            this.links.push(link2)
            let link3 = new LineOP(this.crotch, this.rp, "#AAAAAA", .5)
            this.links.push(link3)
            let link4 = new LineOP(this.rp, this.rf, "#AAAAAA", .5)
            this.links.push(link4)
            let link5 = new LineOP(this.lp, this.lf, "#AAAAAA", .5)
            this.links.push(link5)
            this.startangle = Math.random() * Math.PI * 2
            this.endangle = Math.random() * Math.PI * 2
        }
        draw() {

            // }
            this.crotch.x = this.center.x + (Math.cos(this.angle) * this.length)
            this.crotch.y = this.center.y + (Math.sin(this.angle) * this.length)
            if (this.grip == 0) {
                this.lp.x = this.center.x + (Math.cos(this.angle + .15) * this.length * 1.13)
                this.lp.y = this.center.y + (Math.sin(this.angle + .15) * this.length * 1.13)
                this.rp.x = this.center.x + (Math.cos(this.angle - .15) * this.length * 1.13)
                this.rp.y = this.center.y + (Math.sin(this.angle - .15) * this.length * 1.13)
                this.rf.x = this.center.x + (Math.cos(this.angle - .07) * this.length * 1.27)
                this.rf.y = this.center.y + (Math.sin(this.angle - .07) * this.length * 1.27)
                this.lf.x = this.center.x + (Math.cos(this.angle + .07) * this.length * 1.27)
                this.lf.y = this.center.y + (Math.sin(this.angle + .07) * this.length * 1.27)
                this.g.x = this.center.y + (Math.cos(this.angle) * this.length * 1.26)
                this.g.y = this.center.y + (Math.sin(this.angle) * this.length * 1.26)
                this.grip = 1
            } else {

                this.lp.x = this.center.x + (Math.cos(this.angle + .1 + ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.lp.y = this.center.y + (Math.sin(this.angle + .1 + ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rp.x = this.center.x + (Math.cos(this.angle - .1 - ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rp.y = this.center.y + (Math.sin(this.angle - .1 - ((this.grip - 10) * -.007)) * this.length * 1.15)
                this.rf.x = this.center.x + (Math.cos(this.angle - .07 - ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.rf.y = this.center.y + (Math.sin(this.angle - .07 - ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.lf.x = this.center.x + (Math.cos(this.angle + .07 + ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.lf.y = this.center.y + (Math.sin(this.angle + .07 + ((this.grip - 10) * -.01)) * this.length * 1.26)
                this.g.x = this.center.y + (Math.cos(this.angle) * this.length * 1.26)
                this.g.y = this.center.y + (Math.sin(this.angle) * this.length * 1.26)
            }

            this.g.x = (this.lf.x + this.rf.x) / 2
            this.g.y = (this.lf.y + this.rf.y) / 2
            // this.grip%=17
            // this.angle += .05
            this.angle %= 6.283
            let point = new Point(this.center.x + (Math.cos(this.startangle) * 5), this.center.y + (Math.sin(this.startangle) * 5))
            let point2 = new Point(this.center.x + (Math.cos(this.endangle) * 5), this.center.y + (Math.sin(this.endangle) * 5))

            let link1 = new LineOP(this.center, point, "#00FF00", .5)
            let link2 = new LineOP(this.center, point2, "#FF0000", .5)
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].draw()
            }
            link2.draw()
            link1.draw()
        }
    }

    class Atom {
        constructor(x, y, h, w, color) {
            this.spawntimer = 0
            this.dotwork = 0
            this.dotworkx = 0
            this.neighbors = []
            this.dots = []
            this.mols = []
            this.compmols = []
            this.body = new Rectangle(x, y, w, h, color)
            this.glob = new Particle(x + w * .5, y + w * .5, w * .5, getRandomColor())
            this.mglob = new Particle(x + w * .5, y + w * .5, w * .05, getRandomColor())
            this.playerlink = new LineOP(this.body, this.glob, 1, "red")
            this.type = 0
            this.belt = 0
            this.xdir = 0
            this.ydir = 0
            for (let t = 0; t < 18; t++) {
                if (Math.random() > .5) {
                    this.type += 1
                }
            }
            if (this.type < 5) {
                this.kind = 0
            }
            if (this.type == 14) {
                this.kind = 1
                this.hydrogen = (Math.random() * 1000) + 300
                this.spigot = 1
            } else {
                this.hydrogen = 0
            }
            if (this.type == 14) {
                if (Math.random() < .5) {
                    this.kind = 1
                    this.oxygen = (Math.random() * 500) + 300
                    this.hydrogen = 0
                    this.spigot = 2
                } else {
                    this.oxygen = 0

                }
            } else {
                this.oxygen = 0
            }
            if (this.type == 15) {

                if (Math.random() < .5) {
                    this.kind = 1
                    this.carbon = (Math.random() * 200) + 300
                    this.spigot = 3

                    this.nitrogen = 0
                } else {
                    // console.log(this.body)
                    this.kind = 1
                    this.nitrogen = (Math.random() * 200) + 300
                    this.spigot = 4

                    this.carbon = 0
                }
            } else {
                this.carbon = 0
                this.nitrogen = 0
            }
            if (this.type == 16) {

                if (Math.random() < .5) {
                    this.kind = 1
                    this.phosphorous = (Math.random() * 200) + 300
                    this.spigot = 5
                    this.sulfur = 0
                } else {
                    // console.log(this.body)
                    this.kind = 1
                    this.sulfur = (Math.random() * 200) + 300
                    this.spigot = 6
                    this.phosphorous = 0
                }
            } else {
                this.sulfur = 0
                this.phosphorous = 0
            }
            this.first = 0
        }
        runBelt() {
            let point = new Point(this.glob.x + this.xdir * 2, this.glob.y + this.ydir * 2)
            let link = new LineOP(point, this.glob, "#FFFF00AA", 1)
            let belt = new Polygon(this.glob.x, this.glob.y, 1, "#FFFF00AA", 3, 0, 0, Math.PI * .5, 0)
            belt.angle = (link.angle())

            if (this.belt == 1) {
                for (let t = 0; t < Math.min(this.dotwork, this.dots.length); t++) {
                    if (this.body.isPointInside(this.dots[t])) {
                        this.dots[t].x += .27 * this.xdir
                        this.dots[t].y += .27 * this.ydir
                        this.dots[t].gripped = 1
                        // this.dots[t].last = grid.blocks.indexOf(this)
                    }
                    if (!this.body.isPointInside(this.dots[t])) {
                        this.dots[t].x += .01 * this.xdir
                        this.dots[t].y += .01 * this.ydir
                        for (let k = 0; k < this.neighbors.length; k++) {
                            // if(this.neighbors[k] == this.dots[t].last){
                            //     console.log(this)
                            //     continue
                            // }
                            if (grid.blocks[this.neighbors[k]].body.isPointInside(this.dots[t])) {
                                if (this.dots[t].marked != 1 && this.dots[t].type == 1) {
                                    // console.log(grid.blocks[this.neighbors[k]].dots, grid.blocks[this.neighbors[k]].dots.length)

                                    this.hydrogen -= 50
                                    grid.blocks[this.neighbors[k]].hydrogen += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // console.log(grid.blocks[this.neighbors[k]].dots, grid.blocks[this.neighbors[k]].dots.length)

                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =1
                                    // }
                                    this.dots[t].marked = 1
                                }
                                if (this.dots[t].marked != 1 && this.dots[t].type == 2) {
                                    this.carbon -= 50
                                    grid.blocks[this.neighbors[k]].carbon += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =2
                                    // }
                                    this.dots[t].marked = 1
                                    // t--
                                }
                                if (this.dots[t].marked != 1 && this.dots[t].type == 3) {
                                    this.oxygen -= 50
                                    grid.blocks[this.neighbors[k]].oxygen += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // t--
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =3
                                    // }
                                    this.dots[t].marked = 1

                                }
                                if (this.dots[t].marked != 1 && this.dots[t].type == 13) {
                                    this.nitrogen -= 50
                                    grid.blocks[this.neighbors[k]].nitrogen += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // t--
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =3
                                    // }
                                    this.dots[t].marked = 1

                                }
                                if (this.dots[t].marked != 1 && this.dots[t].type == 1001) {
                                    this.phosphorous -= 50
                                    grid.blocks[this.neighbors[k]].phosphorous += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // t--
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =3
                                    // }
                                    this.dots[t].marked = 1

                                }
                                if (this.dots[t].marked != 1 && this.dots[t].type == 1002) {
                                    this.sulfur -= 50
                                    grid.blocks[this.neighbors[k]].sulfur += 50
                                    grid.blocks[this.neighbors[k]].dots.unshift(this.dots[t].copy())
                                    // t--
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].dots.length;r++){
                                    //     grid.blocks[this.neighbors[k]].dots[r].type =3
                                    // }
                                    this.dots[t].marked = 1

                                }
                                break
                            }
                        }
                    } else {
                    }
                }
                for (let t = 0; t < this.mols.length; t++) {
                    if (this.body.isPointInside(this.mols[t])) {
                        this.mols[t].x += .25 * this.xdir
                        this.mols[t].y += .25 * this.ydir
                        this.mols[t].gripped = 1
                        // this.mols[t].last = grid.blocks.indexOf(this)
                    }
                    if (!this.body.isPointInside(this.mols[t])) {
                        this.mols[t].x += .01 * this.xdir
                        this.mols[t].y += .01 * this.ydir
                        for (let k = 0; k < this.neighbors.length; k++) {
                            // if(this.neighbors[k] == this.mols[t].last){
                            //     continue
                            // }
                            if (grid.blocks[this.neighbors[k]].body.isPointInside(this.mols[t])) {

                                if (this.mols[t].marked != 1 && this.mols[t].type == 4) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 5) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 6) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 17) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                if (this.mols[t].marked != 1 && this.mols[t].type == 18) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                if (this.mols[t].marked != 1 && this.mols[t].type == 19) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                if (this.mols[t].marked != 1 && this.mols[t].type == 1004) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                if (this.mols[t].marked != 1 && this.mols[t].type == 1005) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                if (this.mols[t].marked != 1 && this.mols[t].type == 1006) {
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    this.mols[t].marked = 1
                                }

                                // if(this.mols[t].marked != 1 && this.mols[t].type ==1007){
                                //     grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                //     this.mols[t].marked = 1
                                // }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 1) {
                                    // console.log(grid.blocks[this.neighbors[k]].mols, grid.blocks[this.neighbors[k]].mols.length)

                                    this.hydrogen -= 50
                                    grid.blocks[this.neighbors[k]].hydrogen += 50
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    // console.log(grid.blocks[this.neighbors[k]].mols, grid.blocks[this.neighbors[k]].mols.length)

                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].mols.length;r++){
                                    //     grid.blocks[this.neighbors[k]].mols[r].type =1
                                    // }
                                    this.mols[t].marked = 1
                                }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 2) {
                                    this.carbon -= 50
                                    grid.blocks[this.neighbors[k]].carbon += 50
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].mols.length;r++){
                                    //     grid.blocks[this.neighbors[k]].mols[r].type =2
                                    // }
                                    this.mols[t].marked = 1
                                    // t--
                                }
                                if (this.mols[t].marked != 1 && this.mols[t].type == 3) {
                                    this.oxygen -= 50
                                    grid.blocks[this.neighbors[k]].oxygen += 50
                                    grid.blocks[this.neighbors[k]].mols.unshift(this.mols[t].copy())
                                    // t--
                                    // for(let r = 0;r<grid.blocks[this.neighbors[k]].mols.length;r++){
                                    //     grid.blocks[this.neighbors[k]].mols[r].type =3
                                    // }
                                    this.mols[t].marked = 1

                                }
                                break
                            }
                        }
                    } else {
                    }
                }
                for (let t = 0; t < this.compmols.length; t++) {
                    if (this.body.isPointInside(this.compmols[t])) {
                        this.compmols[t].x += .23 * this.xdir
                        this.compmols[t].y += .23 * this.ydir
                        this.compmols[t].gripped = 1
                        // this.compmols[t].last = grid.blocks.indexOf(this)
                    }
                    if (!this.body.isPointInside(this.compmols[t])) {
                        this.compmols[t].x += .01 * this.xdir
                        this.compmols[t].y += .01 * this.ydir
                        for (let k = 0; k < this.neighbors.length; k++) {
                            // if(this.neighbors[k] == this.compmols[t].last){
                            //     continue
                            // }
                            if (grid.blocks[this.neighbors[k]].body.isPointInside(this.compmols[t])) {
                                if (this.compmols[t].marked != 1 && this.compmols[t].type == 10) {
                                    grid.blocks[this.neighbors[k]].compmols.unshift(this.compmols[t].copy())
                                    this.compmols[t].marked = 1
                                }
                                if (this.compmols[t].marked != 1 && this.compmols[t].type == 11) {
                                    grid.blocks[this.neighbors[k]].compmols.unshift(this.compmols[t].copy())
                                    this.compmols[t].marked = 1
                                }
                                if (this.compmols[t].marked != 1 && this.compmols[t].type == 12) {
                                    grid.blocks[this.neighbors[k]].compmols.unshift(this.compmols[t].copy())
                                    this.compmols[t].marked = 1
                                }
                                if (this.compmols[t].marked != 1 && this.compmols[t].type == 1007) {
                                    grid.blocks[this.neighbors[k]].compmols.unshift(this.compmols[t].copy())
                                    this.compmols[t].marked = 1
                                }
                                break
                            }
                        }
                    } else {
                    }
                }
            }
            if (this.belt == 1) {
                belt.draw()
            }
            this.cleandots()
        }
        cleandots() {
            for (let t = 0; t < this.dots.length; t++) {
                if (this.dots[t].marked == 1) {
                    this.dots.splice(t, 1)
                    // t--
                }
            }
            for (let t = 0; t < this.mols.length; t++) {
                if (this.mols[t].marked == 1) {
                    this.mols.splice(t, 1)
                    // t--
                }
            }
            for (let t = 0; t < this.compmols.length; t++) {
                if (this.compmols[t].marked == 1) {
                    this.compmols.splice(t, 1)
                    // t--
                }
            }
        }
        getAtoms() {

            for (let t = 0; t < Math.ceil((this.hydrogen + this.oxygen + this.carbon + this.nitrogen + this.phosphorous + this.sulfur) / 50); t++) {
                let atom = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                atom.type = 1
                if (this.hydrogen > this.carbon && this.hydrogen > this.oxygen && this.hydrogen > this.nitrogen && this.hydrogen > this.sulfur && this.hydrogen > this.phosphorous) {
                    atom.type = 1
                }
                if (this.carbon > this.hydrogen && this.carbon > this.oxygen && this.carbon > this.nitrogen && this.carbon > this.sulfur && this.carbon > this.phosphorous) {
                    atom.type = 2
                }
                if (this.oxygen > this.carbon && this.oxygen > this.hydrogen && this.oxygen > this.nitrogen && this.oxygen > this.sulfur && this.oxygen > this.phosphorous) {
                    atom.type = 3
                }
                if (this.nitrogen > this.carbon && this.nitrogen > this.hydrogen && this.nitrogen > this.oxygen && this.nitrogen > this.sulfur && this.nitrogen > this.phosphorous) {
                    atom.type = 13
                }
                if (this.phosphorous > this.carbon && this.phosphorous > this.hydrogen && this.phosphorous > this.oxygen && this.phosphorous > this.nitrogen && this.phosphorous > this.sulfur) {
                    atom.type = 1001
                    atom.color = "#FF00AA"
                }
                if (this.sulfur > this.carbon && this.sulfur > this.hydrogen && this.sulfur > this.oxygen && this.sulfur > this.nitrogen && this.sulfur > this.phosphorous) {
                    atom.type = 1002
                    atom.color = "#FFBB44"
                }

                this.dots.push(atom)

            }
        }
        draw() {
            if(this.first == 0){
                this.first =1
            this.link = new LineOP(this.body, candyman.body)
            this.playerlink = new LineOP(candyman.body, this.glob, "red", .1)
            }
            // this.cleandots()
            if (this.hydrogen < 50) {
                this.hydrogen = 0
            }
            if (this.carbon < 50) {
                this.carbon = 0
            }
            if (this.oxygen < 50) {
                this.oxygen = 0
            }
            if (this.nitrogen < 50) {
                this.nitrogen = 0
            }
            if (this.sulfur < 50) {
                this.sulfur = 0
            }
            if (this.phosphorous < 50) {
                this.phosphorous = 0
            }
            let colorstring = `rgb(${(this.carbon / 4) + (this.nitrogen / 8) + (this.sulfur / 3.5) + (this.phosphorous / 4)}, ${(this.hydrogen / 4) + (this.nitrogen / 3.5) + (this.sulfur / 3.5)}, ${(this.oxygen / 4) + (this.nitrogen / 5) + (this.phosphorous / 8)})`
            if (this.body.color != colorstring || (this.carbon + this.oxygen + this.hydrogen + this.sulfur + this.phosphorous + this.nitrogen) > 0) {
                this.body.color = colorstring
                if (this.playerlink.hypotenuse() < 263) {
                    // this.playerlink.draw()
                    this.body.draw()
                }
            }

            // this.glob.draw()
        }
        freeDots() {
            this.dotwork = Math.ceil((this.hydrogen + this.oxygen + this.carbon + this.nitrogen + this.sulfur + this.phosphorous) / 50)
            // console.log(this.hydrogen, this.carbon, this.oxygen)
            while (this.dotwork > this.dots.length) {
                let atom = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                if (this.hydrogen > this.carbon && this.hydrogen > this.oxygen && this.hydrogen > this.nitrogen && this.hydrogen > this.sulfur && this.hydrogen > this.phosphorous) {
                    atom.type = 1
                }
                if (this.carbon > this.hydrogen && this.carbon > this.oxygen && this.carbon > this.nitrogen && this.carbon > this.sulfur && this.carbon > this.phosphorous) {
                    atom.type = 2
                }
                if (this.oxygen > this.carbon && this.oxygen > this.hydrogen && this.oxygen > this.nitrogen && this.oxygen > this.sulfur && this.oxygen > this.phosphorous) {
                    atom.type = 3
                }
                if (this.nitrogen > this.carbon && this.nitrogen > this.hydrogen && this.nitrogen > this.oxygen && this.nitrogen > this.sulfur && this.nitrogen > this.phosphorous) {
                    atom.type = 13
                }
                if (this.phosphorous > this.carbon && this.phosphorous > this.hydrogen && this.phosphorous > this.oxygen && this.phosphorous > this.nitrogen && this.phosphorous > this.sulfur) {
                    atom.type = 1001
                }
                if (this.sulfur > this.carbon && this.sulfur > this.hydrogen && this.sulfur > this.oxygen && this.sulfur > this.nitrogen && this.sulfur > this.phosphorous) {
                    atom.type = 1002
                }

                this.dots.push(atom)
            }

            // if(Math.random()<.005){
            this.spawntimer++

            if (this.spawntimer == 62) {
                if (this.spigot == 1) {
                    if (this.hydrogen < 300) {
                        // console.log(this.hydrogen)
                        this.hydrogen += 50
                        let hydro = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                        hydro.type = 1
                        this.dots.unshift(hydro)
                    }
                    this.spawntimer = 0
                }
            }
            if (this.spawntimer == 78) {
                if (this.spigot == 2) {
                    this.spawntimer = 0
                    if (this.oxygen < 250) {
                        this.oxygen += 50
                        let oxygen = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                        oxygen.type = 3
                        this.dots.unshift(oxygen)
                    }
                }
            }

            if (this.spawntimer == 85) {
                if (this.spigot == 3) {
                    this.spawntimer = 0
                    if (this.carbon < 200) {
                        this.carbon += 50
                        let carbon = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                        carbon.type = 2
                        this.dots.unshift(carbon)
                    }
                }
            }

            if (this.spawntimer == 79) {
                if (this.spigot == 4) {
                    // console.log(this.nitrogen)
                    this.spawntimer = 0
                    if (this.nitrogen < 200) {
                        this.nitrogen += 50
                        let nitrogen = new Particle(this.glob.x, this.glob.y, .5, "#FFFFFF", Math.random() - .5, Math.random() - .5)
                        nitrogen.type = 13
                        this.dots.unshift(nitrogen)
                        // console.log(nitrogen)

                    }
                }
            }
            if (this.spawntimer == 110) {
                if (this.spigot == 5) {
                    // console.log(this.nitrogen)
                    this.spawntimer = 0
                    if (this.phosphorous < 200) {
                        this.phosphorous += 50
                        let phosphorous = new Particle(this.glob.x, this.glob.y, .6, "#FF00AA", Math.random() - .5, Math.random() - .5)
                        phosphorous.type = 1001
                        this.dots.unshift(phosphorous)
                        // console.log(nitrogen)

                    }
                }
            }
            if (this.spawntimer == 117) {
                if (this.spigot == 6) {
                    // console.log(this.nitrogen)
                    this.spawntimer = 0
                    if (this.sulfur < 200) {
                        this.sulfur += 50
                        let sulfur = new Particle(this.glob.x, this.glob.y, .7, "#FFBB44", Math.random() - .5, Math.random() - .5)
                        sulfur.type = 1002
                        this.dots.unshift(sulfur)
                        // console.log(nitrogen)

                    }
                }
            }

        }
        atomize() {

            for (let t = 0; t < Math.min(this.dotwork, this.dots.length); t++) {

                if (t > 16) {
                    continue
                }
                if (this.dots[t].marked != 1 && this.dots[t].type == 1) {

                    this.dots[t].color = "#00FF00"
                }
                // if(this.carbon > this.hydrogen && this.carbon > this.oxygen){

                if (this.dots[t].marked != 1 && this.dots[t].type == 2) {
                    this.dots[t].color = "#FF0000"
                }
                // if(this.oxygen > this.carbon && this.oxygen > this.hydrogen){

                if (this.dots[t].marked != 1 && this.dots[t].type == 3) {
                    this.dots[t].color = "#0000ff"
                }


                if (this.dots[t].marked != 1 && this.dots[t].type == 13) {
                    this.dots[t].color = "#55FFAA"
                }

                if (this.dots[t].marked != 1 && this.dots[t].type == 1001) {
                    this.dots[t].color = "#FF00AA"
                    this.dots[t].radius = .6
                }

                if (this.dots[t].marked != 1 && this.dots[t].type == 1002) {
                    this.dots[t].color = "#FFBB44"
                    this.dots[t].radius = .7
                }
                if (this.dots[t].gripped != 1 || this.belt == 1) {


                    if (this.link.sqrDis() < 66000) {
                        if (this.dots[t].age >= 0) {
                            this.dots[t].draw()
                        } else {
                            this.dots[t].age++
                        }

                        if (this.dots[t].x + this.dots[t].radius > this.body.x + this.body.width) {
                            if (this.dots[t].xmom > 0) {
                                this.dots[t].xmom *= -1
                            }
                        }
                        if (this.dots[t].y + this.dots[t].radius > this.body.y + this.body.height) {
                            if (this.dots[t].ymom > 0) {
                                this.dots[t].ymom *= -1
                            }
                        }
                        if (this.dots[t].x - this.dots[t].radius < this.body.x) {
                            if (this.dots[t].xmom < 0) {
                                this.dots[t].xmom *= -1
                            }
                        }
                        if (this.dots[t].y - this.dots[t].radius < this.body.y) {
                            if (this.dots[t].ymom < 0) {
                                this.dots[t].ymom *= -1
                            }
                        }

                        if (this.belt == 1) {
                            this.dots[t].x += this.dots[t].xmom * .05
                            this.dots[t].y += this.dots[t].ymom * .05
                        } else {
                            this.dots[t].x += this.dots[t].xmom
                            this.dots[t].y += this.dots[t].ymom
                        }
                    }
                    // this.dots[t].color =  `rgb(${Math.max(this.carbon*4, 100)}, ${Math.max(this.hydrogen*4,100)}, ${Math.max(this.oxygen*4,100)})`
                    // if(this.dots[t].gripped!=1 ){

                    // if(this.hydrogen > this.carbon && this.hydrogen > this.oxygen){
                    if (this.dots[t].marked != 1 && this.dots[t].type == 1) {

                        this.dots[t].color = "#00FF00"
                    }
                    // if(this.carbon > this.hydrogen && this.carbon > this.oxygen){

                    if (this.dots[t].marked != 1 && this.dots[t].type == 2) {
                        this.dots[t].color = "#FF0000"
                    }
                    // if(this.oxygen > this.carbon && this.oxygen > this.hydrogen){

                    if (this.dots[t].marked != 1 && this.dots[t].type == 3) {
                        this.dots[t].color = "#0000ff"
                    }
                    if (this.dots[t].marked != 1 && this.dots[t].type == 13) {
                        this.dots[t].color = "#55FFAA"
                    }
                    // }
                } else if (this.belt == 1) {
                    if (this.link.sqrDis() < 66000) {
                        if (this.dots[t].age >= 0) {
                            this.dots[t].draw()
                        } else {
                            this.dots[t].age++
                        }
                    }
                }
            }
            // for(let t = 0;t<this.dots.length;t++){

            // }
        }
        molecularize() {

            for (let t = 0; t < this.mols.length; t++) {
                if (t > 16) {
                    continue
                }
                if (this.mols[t].marked != 1 && this.mols[t].type == 1) {

                    this.mols[t].color = "#00FF00"
                }
                if (this.mols[t].marked != 1 && this.mols[t].type == 2) {
                    this.mols[t].color = "#FF0000"
                }
                if (this.mols[t].marked != 1 && this.mols[t].type == 3) {
                    this.mols[t].color = "#0000ff"
                }
                if (this.mols[t].gripped != 1 || this.belt == 1) {

                    if (this.link.sqrDis() < 66000) {
                        if (this.mols[t].age >= 0) {
                            this.mols[t].draw()
                        } else {
                            this.mols[t].age++
                        }

                        if (this.mols[t].x + this.mols[t].radius > this.body.x + this.body.width) {
                            if (this.mols[t].xmom > 0) {
                                this.mols[t].xmom *= -1
                            }
                        }
                        if (this.mols[t].y + this.mols[t].radius > this.body.y + this.body.height) {
                            if (this.mols[t].ymom > 0) {
                                this.mols[t].ymom *= -1
                            }
                        }
                        if (this.mols[t].x - this.mols[t].radius < this.body.x) {
                            if (this.mols[t].xmom < 0) {
                                this.mols[t].xmom *= -1
                            }
                        }
                        if (this.mols[t].y - this.mols[t].radius < this.body.y) {
                            if (this.mols[t].ymom < 0) {
                                this.mols[t].ymom *= -1
                            }
                        }

                        if (this.belt == 1) {
                            this.mols[t].x += this.mols[t].xmom * .05
                            this.mols[t].y += this.mols[t].ymom * .05
                        } else {
                            this.mols[t].x += this.mols[t].xmom
                            this.mols[t].y += this.mols[t].ymom
                        }
                    }
                    if (this.mols[t].marked != 1 && this.mols[t].type == 4) {
                        this.mols[t].color = "#FFFF00"
                    }
                } else if (this.belt == 1) {
                    if (this.link.sqrDis() < 66000) {
                        if (this.mols[t].age >= 0) {
                            this.mols[t].draw()
                        } else {
                            this.mols[t].age++
                        }
                    }
                }
            }
        }
        compmolecularize() {

            for (let t = 0; t < this.compmols.length; t++) {

                if (t > 16) {
                    continue
                }
                if (this.compmols[t].gripped != 1 || this.belt == 1) {

                    if (this.link.sqrDis() < 66000) {
                        if (this.compmols[t].age >= 0) {
                            this.compmols[t].draw()
                        } else {
                            this.compmols[t].age++
                        }

                        if (this.compmols[t].x + this.compmols[t].radius > this.body.x + this.body.width) {
                            if (this.compmols[t].xmom > 0) {
                                this.compmols[t].xmom *= -1
                            }
                        }
                        if (this.compmols[t].y + this.compmols[t].radius > this.body.y + this.body.height) {
                            if (this.compmols[t].ymom > 0) {
                                this.compmols[t].ymom *= -1
                            }
                        }
                        if (this.compmols[t].x - this.compmols[t].radius < this.body.x) {
                            if (this.compmols[t].xmom < 0) {
                                this.compmols[t].xmom *= -1
                            }
                        }
                        if (this.compmols[t].y - this.compmols[t].radius < this.body.y) {
                            if (this.compmols[t].ymom < 0) {
                                this.compmols[t].ymom *= -1
                            }
                        }

                        if (this.belt == 1) {
                            this.compmols[t].x += this.compmols[t].xmom * .05
                            this.compmols[t].y += this.compmols[t].ymom * .05
                        } else {
                            this.compmols[t].x += this.compmols[t].xmom
                            this.compmols[t].y += this.compmols[t].ymom
                        }
                    }
                    if (this.compmols[t].marked != 1 && this.compmols[t].type == 10) {
                        this.compmols[t].color = "#FFFFFF"
                    }
                } else if (this.belt == 1) {
                    if (this.link.sqrDis() < 66000) {
                        if (this.compmols[t].age >= 0) {
                            this.compmols[t].draw()
                        } else {
                            this.compmols[t].age++
                        }
                    }
                }
            }
        }
    }

    let grid = new Grid(10)
    let candyman = new Player()
    let menu = new UI()
    function main() {
        canvas_context.clearRect(-1290, -720, canvas.width * 10, canvas.height * 10)  // refreshes the image
        canvas_context.fillStyle = "#000000"
        canvas_context.fillRect(0, 0, canvas.width, canvas.width)
        // gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
        // game code goes here
        if (keysPressed['.']) {
            play = 0
        }
        if (keysPressed[';']) {
            play = 1
        }
        if (play == 1) {
            music.play()
        } else {
            music.pause()
        }
        grid.draw()
        candyman.draw()

        if (keysPressed['r']) {
            menu.selector = 0
        }

        if (keysPressed['n']) {
            menu.selector = 1
        }

        if (keysPressed['v']) {
            menu.selector = 2
        }

        if (keysPressed['g']) {
            menu.selector = 3
        }

        if (keysPressed['b']) {
            menu.selector = 4
        }

        if (keysPressed['y']) {
            menu.selector = 5
        }

        if (keysPressed['t']) {
            menu.selector = 6
        }

        if (keysPressed['h']) {
            menu.selector = 7
        }

        if (keysPressed['x']) {
            menu.selector = 8
        }

        if (keysPressed['c']) {
            menu.selector = 9
        }

        if (keysPressed['e']) {
            menu.selector = 10
        }

        if (keysPressed['f']) {
            menu.selector = 11
        }

        if (keysPressed['z']) {
            menu.selector = 12
        }
        menu.draw()
        if (drawcheck == 1) {
            canvas_context.font = "5px arial"
            canvas_context.fillStyle = "#DDDDDD"
            let text = canvas_context.measureText(tooltiptext).width
            let box = new Rectangle(TIP_engine.x - 1, TIP_engine.y - 4, text + 3, 6, "#090909")
            box.draw()
            canvas_context.fillStyle = "#DDDDDD"
            canvas_context.fillText(tooltiptext, TIP_engine.x + 1, TIP_engine.y + 1)

        }

        // if (keysPressed['-'] && recording == 0) {
        //     recording = 1
        //     video_recorder.record()
        // }
        // if (keysPressed['='] && recording == 1) {
        //     recording = 0
        //     video_recorder.stop()
        //     video_recorder.download('factoricule.webm')
        // }
    }





    //put your code here

    function interfacefunc(t) {


        if (menu.selector == 1) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    grid.blocks[t].belt = 1
                    grid.blocks[t].xdir = 1
                    grid.blocks[t].ydir = 0
                }
            }
        }
        if (menu.selector == 2) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    grid.blocks[t].belt = 1
                    grid.blocks[t].xdir = -1
                    grid.blocks[t].ydir = 0
                }
            }
        }
        if (menu.selector == 3) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    grid.blocks[t].belt = 1
                    grid.blocks[t].xdir = 0
                    grid.blocks[t].ydir = -1
                }
            }
        }
        if (menu.selector == 4) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    grid.blocks[t].belt = 1
                    grid.blocks[t].xdir = 0
                    grid.blocks[t].ydir = 1
                }
            }
        }


        if (menu.selector == 0) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    candyman.structures.push(new Arm(grid.blocks[t]))
                    candyman.selectedindex++
                }
            }
        }

        if (menu.selector == 5) {
            let etylbase = new Assembler(grid.blocks[t])
            etylbase.body.type = 4
            candyman.structures.push(etylbase)
            candyman.selectedindex++
        }
        if (menu.selector == 7) {
            let h2base = new Assembler(grid.blocks[t])
            h2base.body.type = 6
            candyman.structures.push(h2base)
            candyman.selectedindex++
        }
        if (menu.selector == 6) {
            let co2base = new Assembler(grid.blocks[t])
            co2base.body.type = 5
            candyman.structures.push(co2base)
            candyman.selectedindex++
        }
        if (menu.selector == 8) {
            let glucbase = new Compssembler(grid.blocks[t])
            glucbase.body.type = 10
            candyman.structures.push(glucbase)
            candyman.selectedindex++
        }
        if (menu.selector == 9) {
            let glucbase = new Compssembler(grid.blocks[t])
            glucbase.body.type = 11
            candyman.structures.push(glucbase)
            candyman.selectedindex++
        }
        if (menu.selector == 10) {
            let glucbase = new Compssembler(grid.blocks[t])
            glucbase.body.type = 12
            candyman.structures.push(glucbase)
            candyman.selectedindex++
        }
        if (menu.selector == 11) {
            let glucbase = new Cup(grid.blocks[t])
            candyman.structures.push(glucbase)
            candyman.selectedindex++
        }
        if (menu.selector == 12) {
            for (let t = 0; t < grid.blocks.length; t++) {
                if (grid.blocks[t].glob.isPointInside(TIP_engine)) {
                    for (let j = 0; j < grid.blocks[t].dots.length; j++) {
                        if (grid.blocks[t].body.isPointInside(grid.blocks[t].dots[j])) {
                            grid.blocks[t].dots[j].gripped = 0
                        }
                    }
                    for (let j = 0; j < grid.blocks[t].mols.length; j++) {
                        if (grid.blocks[t].body.isPointInside(grid.blocks[t].mols[j])) {
                            grid.blocks[t].mols[j].gripped = 0
                        }
                    }
                    for (let j = 0; j < grid.blocks[t].compmols.length; j++) {
                        if (grid.blocks[t].body.isPointInside(grid.blocks[t].compmols[j])) {
                            grid.blocks[t].compmols[j].gripped = 0
                        }
                    }
                    grid.blocks[t].belt = 0
                    grid.blocks[t].xdir = 0
                    grid.blocks[t].ydir = 0
                    for (let k = 0; k < candyman.structures.length; k++) {
                        if (candyman.structures[k].tile == grid.blocks[t]) {
                            if (typeof candyman.structures[k].body != "undefined") {
                                if (candyman.structures[k].body.type > 3 && candyman.structures[k].body.type < 10) {
                                    grid.blocks[t].assembler = 0
                                }
                                if (candyman.structures[k].body.type > 9) {
                                    grid.blocks[t].compssembler = 0
                                }
                            }
                            candyman.structures.splice(k, 1)
                            candyman.selectedindex--
                            break
                        }
                    }
                }
            }
        }

        if (menu.selector == 13) {
            let no2base = new Assembler(grid.blocks[t])
            no2base.body.type = 14
            candyman.structures.push(no2base)
            candyman.selectedindex++
        }

        if (menu.selector == 14) {
            let cyanidebase = new Assembler(grid.blocks[t])
            cyanidebase.body.type = 15
            candyman.structures.push(cyanidebase)
            candyman.selectedindex++
        }

        if (menu.selector == 15) {
            let ammoniabase = new Assembler(grid.blocks[t])
            ammoniabase.body.type = 16
            candyman.structures.push(ammoniabase)
            candyman.selectedindex++
        }

        if (menu.selector == 16) {
            let sulfatebase = new Assembler(grid.blocks[t])
            sulfatebase.body.type = 1003
            candyman.structures.push(sulfatebase)
            candyman.selectedindex++
        }
        if (menu.selector == 17) {
            let phosphatebase = new Assembler(grid.blocks[t])
            phosphatebase.body.type = 1005
            candyman.structures.push(phosphatebase)
            candyman.selectedindex++
        }
        if (menu.selector == 18) {
            let h2sbase = new Assembler(grid.blocks[t])
            h2sbase.body.type = 1006
            candyman.structures.push(h2sbase)
            candyman.selectedindex++
        }

        if (menu.selector == 19) {
            let aminobase = new Compssembler(grid.blocks[t])
            aminobase.body.type = 1007
            candyman.structures.push(aminobase)
            candyman.selectedindex++
        }

        if (menu.selector == 20) {
            let train = new Train(grid.blocks[t])
            candyman.structures.push(train)
            candyman.selectedindex++
            menu.selector = -1
        }

    }
})




