#!/usr/bin/python
print "Content-type: text/html\n"
import cgi, cgitb
cgitb.enable()
inp = cgi.FieldStorage()

