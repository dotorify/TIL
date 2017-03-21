// carousel.js
(function (window) {
  'use strict';

  /**
   * @constructor
   */
  function Carousel (id) {
    var self = this;
    self.index = 0;

    // Wrapper 요소
    self.wrapper = document.getElementById(id);
    // Wrapper 자식 요소
    var childNodes = self.wrapper.querySelectorAll('img');
    // Wrapper 자식 요소 수
    self.childCount = childNodes.length;

    // Wrapper 전체 길이: 이미지 1개 너비  * 자식 요소 수 + 여백(10)
    self.wrapper.style.width = self.imgWidth * self.childCount + 'px';
    // Wrapper 자식 요소 너비 설정
    for (var i = 0; i < self.childCount; i++) {
      childNodes[i].width = self.imgWidth;
    }

    // 이벤트 등록: 터치 시작
    self.wrapper.addEventListener('touchstart', function ($event) {
      self.touchStart($event);
    });

    // 이벤트 등록: 터치 이동
    self.wrapper.addEventListener('touchmove', function ($event) {
      self.touchMove($event);
    });

    // 이벤트 등록: 터치 종료
    self.wrapper.addEventListener('touchend', function ($event) {
      self.touchEnd($event);
    });
  };

  Carousel.prototype.touchStart = function ($event) {
    var self = this;

    $event.preventDefault();

    // 터치 시작 X좌표
    self.location.startX = $event.touches[0].clientX;
    // 터치 시작 시점의 이미지 Wrapper Left 값
    self.location.latestWrapperLeft = getPurePixelValue(self.wrapper.style.left);
  };

  Carousel.prototype.touchMove = function ($event) {
    var self = this;
    // 이동 한 현재 X좌표
    self.location.endX = $event.touches[0].clientX;
    // 터치 시작 이후 이동 거리
    self.location.moveX = self.location.startX - self.location.endX;
    // 이미지 Wrapper 이동거리 반영 (터치 시작 시점의 Wrapper Left - 이동한 X축 거리)
    self.wrapper.style.left = self.location.latestWrapperLeft - self.location.moveX + 'px';
  };

  Carousel.prototype.touchEnd = function ($event) {
    var self = this;
    var to = 0;
    var wrapperLeft = getPurePixelValue(self.wrapper.style.left);
    var wrapperLeftAbs = Math.abs(wrapperLeft);
    var wrapperWidth = getPurePixelValue(self.wrapper.style.width);
    // 이동 분기점
    var movePoint = Math.floor(self.imgWidth / 2);
    var moveX = self.location.moveX;
    var moveXAbs = Math.abs(moveX);
    var isAvail = wrapperLeft < 0 && wrapperLeftAbs < (wrapperWidth - self.imgWidth) ? true:false;
    if (isAvail) {
      if (moveXAbs > movePoint) {
        if (moveX > 0) {
          // 우->좌로 터치 이동
          var idx = Math.floor(wrapperLeftAbs / self.imgWidth);
          to = self.imgWidth * (idx + 1);
        } else {
          // 좌->우로 터치 이동
          var idx = Math.floor(wrapperLeftAbs / self.imgWidth);
          to = self.imgWidth * idx;
        }
      } else {
          to = Math.abs(self.location.latestWrapperLeft);
      }
    } else {
      if (wrapperLeft < 0) {
        // 오른쪽 끝에서 더 이동하려는 경우 마지막 이미지로 위치 설정
        to = self.imgWidth * (self.childCount - 1);
      } else {
        to = 0;
      }
    }

    self.moveTo(self.wrapper, to);
  };

  Carousel.prototype.moveTo = function (element, move) {
    var left = getPurePixelValue(element.style.left);
    var to = left + move;

    animate({
      delay: 1,
      duration: 250,
      step: function (progress) {
         element.style.left = left - (to * progress) + "px";
      }
    });

    function animate(opts) {
      var start = new Date;
      var id = setInterval(function () {
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration;

        if (progress > 1) {
          progress = 1;
        }

        opts.step(progress);

        if (progress === 1) {
          clearInterval(id)
        }
      }, opts.delay);
    }
  };

  function getPurePixelValue(value) {
    return value.replace('px', '') * 1;
  }

  // Export to window
  window.app = window.app || {};
  window.app.Carousel = Carousel;
})(window);

