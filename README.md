# Today I Learned
새로 학습한 내용을 다음의 규칙에 따라 commit 한다. [Thoughtbot TIL 참고](https://github.com/thoughtbot/til)

## 공통 규칙
- 명칭은 영어로만 작성한다.

## 폴더 정의 규칙
- 언어 또는 기술명으로 폴더를 정의한다.

## 문서 작성 규칙
- 폴더 내에 위치하는 것을 원칙으로 한다.
- Markdown으로 작성하며 확장자는 소문자 md를 사용한다.
- [GFM(Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/)문법을 따른다.

----

## gollum 설치
- 깃허브의 위키엔진
- 개인용 마크다운 위키
- [공식 설치가이드](https://github.com/gollum/gollum/wiki/Installation)

** gollum은 루비에 의존성을 가지고 있기때문에 사전에 설치되어있어야한다. 위의 공식 설치가이드를 확인해서 OS별 설치법을 확인하도록 한다.
```bash
$ sudo gem install gollumn
```

** 주의. OSX el Capitan 사용자

본인의 경우에는 다음과 같은 에러가 발생했다.
OSX el Capitan에서 도입된 보안체계인 '루트리스(Rootless)'가 원인이다.
- 루트리스: 사용자나 일부 응용프로그램이 시스템 파일을 삭제/변조할 수 없도록 '커널 레벨'에서 파일을 잠그는 강력한 보안 기능이다. 기본적으로 활성화 되어있으며, 사용자가 관리자 권한을 가지고 있더라도 시스템 파일을 마음대로 건드릴수 없도록 차단하는 기능을 담당한다. 이하 [Back to the Mac 글 참고](http://macnews.tistory.com/3408)

```bash
$ sudo gem install gollum
ERROR:  While executing gem ... (Errno::EPERM)
    Operation not permitted - /usr/bin/mustache
```
다음과 같은 형태로 명령어를 입력하면 루트리스문제를 회피할 수 있다. [Stackoverflow 답변 참고](http://stackoverflow.com/a/32892222)
```bash
# sudo gem install -n /usr/local/bin GEM_NAME_HERE
$ sudo gem install -n /usr/local/bin gollum
```

** 주의. gollum설치 중 Unable to convert ... skipping 메시지 발생하는 경우

```
e.g.
unable to convert "\x80" from ASCII-8BIT to UTF-8 for lib/gollum/public/gollum/fonts/FontAwesome.otf, skipping
unable to convert "\x95" from ASCII-8BIT to UTF-8 for lib/gollum/public/gollum/fonts/fontawesome-webfont.eot, skipping
unable to convert "\xAD" from ASCII-8BIT to UTF-8 for lib/gollum/public/gollum/fonts/fontawesome-webfont.woff, skipping
unable to convert "\x89" from ASCII-8BIT to UTF-8 for lib/gollum/public/gollum/images/dirty-shade.png, skipping
```
[해결방법](http://stackoverflow.com/a/18808716)
rdoc을 업데이트하거나 새로 설치하여 이슈를 해결한 후, gollum을 재설치 한다.

```bash 
$ sudo gem update rdoc
or
$ sudo gem install rdoc
```
