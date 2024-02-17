function main(){
    console.clear()
    let background = figma.currentPage.selection[0]
    let elements = background.parent.children
    let group = "." + background.parent.name
    let posW = background.width
    let posH = background.height
    let posX = background.x
    let posY = background.y
    console.log("local screenW, screenH = guiGetScreenSize()")
    console.log("local scale = math.min(math.max(screenH / 768, 0.8), 1.2)")
    console.log("local posW = {}")
    console.log("local posH = {}")
    console.log("local posX = {}")
    console.log("local posY = {}")
    console.log("posW" + group + " = " + posW + " * scale")
    console.log("posH" + group + " = " + posH + " * scale")
    console.log("posX" + group + " = ")
    console.log("posY" + group + " = ")
    let size = elements.length
    if (size > 0) {
        for (let i = 0; i < size; i++) {
            let name_ = elements[i].name
            if (elements[i].fills[0].type !== "IMAGE") {
                var red_ = Math.round(elements[i].fills[0].color.r * 255)
                var green_ = Math.round(elements[i].fills[0].color.g * 255)
                var blue_ = Math.round(elements[i].fills[0].color.b * 255)
                var alpha_ = Math.round(elements[i].fills[0].opacity * 255)
            }
            if (elements[i].type === "RECTANGLE") {
                if (elements[i].fills[0].type === "SOLID") {
                    if (elements[i] !== background) {
                        let x_ = Math.round(elements[i].x - posX)
                        let y_ = Math.round(elements[i].y - posY)
                        let w_ = Math.round(elements[i].width)
                        let h_ = Math.round(elements[i].height)
                        console.log("dxDrawRectangle(posX" + group + " + " + x_ + " * scale, posY" + group + " + " + y_ + " * scale, " + w_ + " * scale, " + h_ + " * scale, tocolor(" + red_ + ", " + green_ + ", " + blue_ + ", " + alpha_ + "), false) --" + name_)
                    } else {
                        console.log("dxDrawRectangle(posX" + group + " + 0 * scale, posY" + group + " + 0 * scale, posW" + group + " + 0 * scale, posH" + group + " + 0 * scale, tocolor(" + red_ + ", " + green_ + ", " + blue_ + ", " + alpha_ + "), false) --background")
                    }
                } else if (elements[i].fills[0].type === "IMAGE") {
                    let x_ = Math.round(elements[i].x - posX)
                    let y_ = Math.round(elements[i].y - posY)
                    let w_ = Math.round(elements[i].width)
                    let h_ = Math.round(elements[i].height)
                    let patch_ = '"assets/gfx/' + elements[i].name + '.png"'
                    console.log("dxDrawImage(posX" + group + " + " + x_ + " * scale, posY" + group + " + " + y_ + " * scale, " + w_ + " * scale, " + h_ + " * scale, " + patch_ + ", 0, 0, 0, tocolor(255, 255, 255, 255), false) --" + name_)
                }
            } else if (elements[i].type === "TEXT") {
                let horizontal = '"' + elements[i].textAlignHorizontal.toLowerCase() + '"'
                let vertical = '"' + elements[i].textAlignVertical.toLowerCase() + '"'
                let text = '"' + elements[i].characters + '"'
                let font = '"default-bold"'
                let x_ = Math.round(elements[i].x - posX)
                let y_ = Math.round(elements[i].y - posY)
                let w_ = Math.round(elements[i].width)
                let h_ = Math.round(elements[i].height)
                console.log("dxDrawText(" + text + ", posX" + group + " + " + x_ + " * scale, posY" + group + " + " + y_ + " * scale, posX" + group + " + (" + w_ + " + " + x_ + ") * scale, posY" + group + " + (" + h_ + " + " + y_ + ") * scale, tocolor(" + red_ + ", " + green_ + ", " + blue_ + ", " + alpha_ + "), 1.00, " + font + ", " + horizontal + ", " + vertical + ", false, false, false, false, false) --" + name_)
            } else if (elements[i].type === "ELLIPSE") {
                let x_ = Math.round(elements[i].x - posX)
                let y_ = Math.round(elements[i].y - posY)
                let w_ = Math.round(elements[i].width)
                let h_ = Math.round(elements[i].height)
                let imagePatch_ = '":inventory/assets/gfx/others/circle.png"'
                console.log("dxDrawImage(posX" + group + " + " + x_ + " * scale, posY" + group + " + " + y_ + " * scale, " + w_ + " * scale, " + h_ + " * scale, " + imagePatch_ + ", 0, 0, 0, tocolor(" + red_ + ", " + green_ + ", " + blue_ + ", " + alpha_ + "), false) --" + name_)
            }
        }
    }
    figma.closePlugin()
}
main()