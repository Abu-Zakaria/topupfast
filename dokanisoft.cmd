@ECHO OFF
start . && start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login && php artisan serve
PAUSE