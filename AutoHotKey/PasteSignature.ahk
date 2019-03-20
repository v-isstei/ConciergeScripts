^!v::
; ---
; Load file to clipboard
FileRead, Clipboard, *c signature.norm ; look for the use of *c  before the filename.rtf. so dont change that

; ---
; paste
Send ^v
return