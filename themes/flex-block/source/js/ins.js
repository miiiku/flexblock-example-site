
window.addEventListener("load", () => {
  const insContainer = document.querySelector(".ins-container")
  const insList = document.querySelector(".ins-list")
  let insImages, loading = createLoading()
  insContainer.insertBefore(loading, insList)

  loadInsList(error => {
    console.log(error)
  }, datas => {
    insImages = datas
    insImages.forEach((item, index) => {
      insList.appendChild(createInsItem(item, index))
    })
  }, () => {
    loading.remove()
    loading = null
  })

  insList.addEventListener("click", function(event) {
    let index, src, el = event.target
    while(el.parentNode && el.parentNode.tagName != "BODY") {
      if (el.className == "ins-item") {
        break
      } else {
        el = el.parentNode
      }
    }
    index = el.dataset.index
    src = el.querySelector(".ins-img img").currentSrc
    InsModal.getInstance(insImages[index], src)
  })
})


/**
 * 创建loading动画
 *
 * @returns laoding DOM
 */
function createLoading() {
  let domStr = `
    <div class="ins-loading">
      <div class="loading"></div>
    </div>
  `
  let tempDiv = document.createElement("div")
  tempDiv.innerHTML = domStr
  return tempDiv.children[0]
}

/**
 * 创建图片DOM
 *
 * @param {*} data 图片数据
 * @param {*} index 图片下标
 * @returns ins item DOM
 */
function createInsItem(data, index) {
  let domStr = `
    <section class="ins-item" data-index="${index}">
      <div class="ins-img">
        <img
          loading="lazy"
          srcset="
            ${data.key}?imageView2/1/w/150/h/150/format/jpg/interlace/1/q/75|imageslim 150w,
            ${data.key}?imageView2/1/w/320/h/320/format/jpg/interlace/1/q/75|imageslim 320w,
            ${data.key}?imageView2/1/w/460/h/460/format/jpg/interlace/1/q/75|imageslim 460w,
            ${data.key}?imageView2/1/w/600/h/600/format/jpg/interlace/1/q/75|imageslim 600w,
          "
          sizes="
            (max-width: 320px) 110px,
            (max-width: 480px) 160px,
            (max-width: 640px) 220px,
            (max-width: 800px) 280px,
            320px
          "
          src="${data.key}"
          alt="${data.key}"
        >
      </div>
      <div class="ins-mask">
        <p>COVER</p>
      </div>
    </section>
  `
  let tempDiv = document.createElement("div")
  tempDiv.innerHTML = domStr
  return tempDiv.children[0]
}

/**
 * 加载图片列表
 *
 * @param {*} error 失败回调函数
 * @param {*} success 成功回调函数
 * @param {*} done 结束回调函数
 */
function loadInsList(error, success, done) {
  // 原生AJAX对象
  const request = new (window.XMLHttpRequest || window.ActiveXObject)()
  request.open("GET", "https://qiniu.miiiku.xyz/ins.json?v" + new Date().getTime())
  request.onload = () => success(JSON.parse(request.responseText))
  request.onerror = err => error(err)
  request.onloadend = () => done()
  request.send()
}




class InsModal {
  constructor() {
    this.isShow = false
    this.imageInfo = null
    this.VW = window.innerWidth
    this.VH = window.innerHeight
    this.insModalMask = this.createInsModalDOM()
    this.insModalContainer = this.insModalMask.querySelector(".ins-modal-container")
    this.initSelfDOM()
    document.body.appendChild(this.insModalMask)
    // window.addEventListener("resize", () => {
    //   if (!this.isShow) return
    //   this.initWH()
    // })
  }

  createInsModalDOM() {
    let domStr = `
      <div class="ins-modal-mask">
        <div class="ins-modal-container">
          <div class="ins-close">
            <i class="icon-close"></i>
          </div>
          <div class="ins-photo">
            <a target="_blank" title="查看原图">
              <picture>
                <source type="image/webp">
                <img>
              </picture>
            </a>
            <div class="ins-loading-modal">
              <div class="loading"></div>
            </div>
          </div>
          <div class="ins-info">
            <div class="info-text">
              <div class="info-title"></div>
              <time class="info-time"></time>
            </div>
            <div class="info-other">
              <div class="info-other-flex">
                <div class="info-devices">
                  <div class="device-item device-sb">
                    <i class="icon-sb device-icon"></i>
                    <p class="device-label">Make:</p>
                    <p class="device-value"></p>
                  </div>
                  <div class="device-item device-jt">
                    <i class="icon-jt device-icon"></i>
                    <p class="device-label">FocalLength:</p>
                    <p class="device-value"></p>
                  </div>
                  <div class="device-item device-gq">
                    <i class="icon-gq device-icon"></i>
                    <p class="device-label">FNumber:</p>
                    <p class="device-value"></p>
                  </div>
                  <div class="device-item device-iso">
                    <i class="icon-iso device-icon"></i>
                    <p class="device-label">ISOSpeedRatings:</p>
                    <p class="device-value"></p>
                  </div>
                </div>
                <div class="info-map">
                  <img src="" alt="位置信息">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    let tempDiv = document.createElement("div")
    tempDiv.innerHTML = domStr
    return tempDiv.children[0]
  }

  initSelfDOM() {
    this.insClose     = this.insModalContainer.querySelector(".ins-close")
    this.insLoading   = this.insModalContainer.querySelector(".ins-loading-modal")
    this.insImageBox  = this.insModalContainer.querySelector(".ins-photo")
    this.insImageLink = this.insModalContainer.querySelector(".ins-photo a")
    this.insImageHigh = this.insModalContainer.querySelector(".ins-photo source")
    this.insImage     = this.insModalContainer.querySelector(".ins-photo img")
    this.insTitle     = this.insModalContainer.querySelector(".info-title")
    this.insTime      = this.insModalContainer.querySelector(".info-time")
    this.deviceSB     = this.insModalContainer.querySelector(".device-sb .device-value")
    this.deviceJT     = this.insModalContainer.querySelector(".device-jt .device-value")
    this.deviceGQ     = this.insModalContainer.querySelector(".device-gq .device-value")
    this.deviceISO    = this.insModalContainer.querySelector(".device-iso .device-value")
    this.mapBox       = this.insModalContainer.querySelector(".info-map")
    this.mapImage     = this.insModalContainer.querySelector(".info-map img")

    this.insModalMask.addEventListener("animationend", event => {
      if (event.animationName == "hide-ins-mask") {
        this.insModalMask.style.display = "none"
        document.body.style.overflow = ""
      }
    })

    this.insClose.addEventListener("click", () => {
      this.insModalMask.classList.remove("show")
      this.insModalMask.classList.add("hide")
      this.isShow = false
    })

    this.insImage.addEventListener("load", () => {
      this.insLoading.style.display = "none"
    })
  }

  loadInsImg(image) {
    this.isShow = true
    this.imageInfo = image
    document.body.style.overflow = "hidden"
    this.insLoading.style.display = "flex"
    this.insImageHigh.srcset = image.key + "-webp"
    this.insImageLink.href = image.key
    this.insImage.src = image.key
    this.insImage.alt = image.key
    this.insTitle.innerText =  image.name.toLocaleUpperCase()
    this.insTime.innerText = this.formatTime(image.putTime)
    this.deviceSB.innerText = this.objGet(image, ['exif', 'Make', 'val'], '--')
    this.deviceJT.innerText = this.objGet(image, ['exif', 'FocalLength', 'val'], '--')
    this.deviceGQ.innerText = this.objGet(image, ['exif', 'FNumber', 'val'], '--')
    this.deviceISO.innerText = this.objGet(image, ['exif', 'ISOSpeedRatings', 'val'], '--')
    if (image.image) {
      this.mapBox.style.display = "block"
      this.mapImage.src = image.image
    } else {
      this.mapBox.style.display = "none"
      this.mapImage.src = ""
    }
    this.insModalMask.classList.remove("hide")
    this.insModalMask.classList.add("show")
    this.insModalMask.style.display = "block"
    // this.initWH()
    return this
  }

  objGet(obj, path, defalutValue = '') {
    let result, index = 0, len = path.length
    while(obj != null && index < len) {
      obj = obj[path[index++]]
    }
    result = index && index == len ? obj : undefined
    return result ? result : defalutValue
  }

  formatTime(time) {
    let dateTime = new Date(Number(time.toString().substring(0, 13)))
    return `${dateTime.getFullYear()}年${dateTime.getMonth() + 1}月${dateTime.getDate()}日`
  }

  initWH() {
    if (this.VW <= 767) return
    let w = this.imageInfo.width
    let h = this.imageInfo.height
    let maxW = (this.VW * 0.8 * 0.6).toFixed(4)
    let maxH = (this.VH * 0.8).toFixed(4)
    let ratio = 1

    if (maxW > maxH) {
      ratio = (maxH / h).toFixed(4)
    }

    if (maxW < maxH) {
      ratio = (maxW / w).toFixed(4)
    }

    let ratioW = (w * ratio).toFixed(4)
    let ratioH = (h * ratio).toFixed(4)
    if (ratioW > maxW || ratioH > maxH) return
    this.insModalContainer.style.height = ratioH + "px"
    this.insImageBox.style.width = ratioW + "px"
    this.insImageBox.style.height = ratioH + "px"
  }

  static getInstance(image, loadenSrc) {
    if (!this.instance) {
      this.instance = new InsModal()
    }
    return this.instance.loadInsImg(image, loadenSrc)
  }
}