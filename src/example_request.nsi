
!include LogicLib.nsh
RequestExecutionLevel user

# declare name of installer file
Outfile "hello world.exe"
 
# open section
Section
 
# create a popup box, with an OK button and some text
MessageBox MB_OK "Now We are Creating Hello_world.txt at Desktop!"
 
/* open an output file called "Hello_world.txt", 
on the desktop in write mode. This file does not need to exist 
before script is compiled and run */
 
FileOpen $0 "$DESKTOP\Hello_world.txt" w
 
# write the string "hello world!" to the output file
FileWrite $0 "hello world!"
 
# close the file
FileClose $0
# Show Success message.
MessageBox MB_OK "Hello_world.txt has been created successfully at Desktop!"
 
# end the section
SectionEnd


Section
   ClearErrors
   FileOpen $0 "C:\\Users\\miche\\Desktop\\NSIS\\test.json" r
   ${Do}
      FileRead $0 $1 
      ${If} ${Errors}
         ${ExitDo}
      ${EndIf}
      StrCpy $2 "$2$1"
   ${Loop}
   FileClose $0
   ; contents should now be in $2:
   MessageBox MB_OK "Contents: $2"
   
inetc::post "$2" "http://localhost:4040/toto" "./test2.json"
# end the section
SectionEnd
