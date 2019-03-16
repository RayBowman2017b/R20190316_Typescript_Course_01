@rem z68_start_lite_server.bat

@rem call yarn run start
@rem 
@rem copy SEC010\index.html *.*
@rem call yarn lite-server sec003_index.html
@rem call yarn lite-server --servePrefix /SEC003
call yarn lite-server
pause
