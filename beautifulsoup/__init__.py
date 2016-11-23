#coding=utf-8
import urllib2
import datetime
import re
from bs4 import BeautifulSoup
import json

january = {}
february = {}
march = {}
april = {}
may = {}
june = {}
july = {}
august = {}
september = {}
october = {}
november = {}
december = {}

present_month = datetime.datetime.now().month
DAY_LIST = ["1",'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
WEATHER_LIST = ['PartlyCloudy','Tstorm','Rain','ScatteredClouds','Clear','ChanceofRain','MostlyCloudy']
RAIN_LIST = ['Tstorm','Rain']
DATAGET = ['Actual:','Forecast:']

MONTH = {
    1 : january,
    2 : february,
    3 : march,
    4 : april,
    5 : may,
    6 : june,
    7 : july,
    8 : august,
    9 : september,
    10 : october,
    11 : november,
    12 : december
}






def is_day(data):
    if str(data) in DAY_LIST:
        return True
    else :
        return False

def is_weather(data):
    if str(data) in WEATHER_LIST:
        return True
    else :
        return False

def is_rain(data):
    if str(data) in RAIN_LIST:
        return True
    else:
        return False

def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False


def new_way_extract_data(soup,month):
    day = 1
    counter = 1
    for text in soup.find_all("td", {"class": "values precip"}):
        if counter % 2 != 0:
            month[str(day)] = re.findall(r"[-+]?\d*\.\d+|\d+", str(text))[1]
            day += 1
        counter += 1


def chiangmai():
    present_month_url_string = 'https://www.wunderground.com/history/airport/VTCC/2016/' + str(
        present_month) + '/21/MonthlyCalendar.html?req_city=Chiang%20Mai&req_state=&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48327&MR=1'
    present_month_page = urllib2.urlopen(present_month_url_string).read()
    present_month_soup = BeautifulSoup(present_month_page, 'html.parser')

    previous_month_url_string = 'https://www.wunderground.com/history/airport/VTCC/2016/' + str(
        present_month - 1) + '/21/MonthlyCalendar.html?req_city=Chiang%20Mai&req_state=&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48327&MR=1'
    previous_month_page = urllib2.urlopen(previous_month_url_string).read()
    previous_month_soup = BeautifulSoup(previous_month_page, 'html.parser')

    second_previous_month_url_string = 'https://www.wunderground.com/history/airport/VTCC/2016/' + str(
        present_month - 2) + '/21/MonthlyCalendar.html?req_city=Chiang%20Mai&req_state=&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48327&MR=1'
    second_previous_month_page = urllib2.urlopen(second_previous_month_url_string).read()
    second_previous_month_soup = BeautifulSoup(second_previous_month_page, 'html.parser')

    new_way_extract_data(present_month_soup, MONTH[present_month])
    new_way_extract_data(previous_month_soup, MONTH[present_month - 1])
    new_way_extract_data(second_previous_month_soup, MONTH[present_month - 2])

def ubonratchathani():
    present_month_url_string = 'https://www.wunderground.com/history/airport/VTUU/2016/'+str(present_month)+'/21/MonthlyCalendar.html?req_city=Ubon%20Ratchathani&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48407#calendar'
    present_month_page = urllib2.urlopen(present_month_url_string).read()
    present_month_soup = BeautifulSoup(present_month_page, 'html.parser')

    previous_month_url_string = 'https://www.wunderground.com/history/airport/VTUU/2016/'+str(present_month-1)+'/21/MonthlyCalendar.html?req_city=Ubon%20Ratchathani&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48407#calendar'
    previous_month_page = urllib2.urlopen(previous_month_url_string).read()
    previous_month_soup = BeautifulSoup(previous_month_page, 'html.parser')

    second_previous_month_url_string = 'https://www.wunderground.com/history/airport/VTUU/2016/'+str(present_month-2)+'/21/MonthlyCalendar.html?req_city=Ubon%20Ratchathani&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48407#calendar'
    second_previous_month_page = urllib2.urlopen(second_previous_month_url_string).read()
    second_previous_month_soup = BeautifulSoup(second_previous_month_page, 'html.parser')

    new_way_extract_data(present_month_soup, MONTH[present_month])
    new_way_extract_data(previous_month_soup, MONTH[present_month - 1])
    new_way_extract_data(second_previous_month_soup, MONTH[present_month - 2])

def surin():
    present_month_url_string = 'https://www.wunderground.com/history/airport/VTUJ/2016/'+str(present_month)+'/21/MonthlyCalendar.html?req_city=Surin&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48432#calendar'
    present_month_page = urllib2.urlopen(present_month_url_string).read()
    present_month_soup = BeautifulSoup(present_month_page, 'html.parser')

    previous_month_url_string = 'https://www.wunderground.com/history/airport/VTUJ/2016/'+str(present_month-1)+'/21/MonthlyCalendar.html?req_city=Surin&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48432#calendar'
    previous_month_page = urllib2.urlopen(previous_month_url_string).read()
    previous_month_soup = BeautifulSoup(previous_month_page, 'html.parser')

    second_previous_month_url_string = 'https://www.wunderground.com/history/airport/VTUJ/2016/'+str(present_month-2)+'/21/MonthlyCalendar.html?req_city=Surin&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48432#calendar'
    second_previous_month_page = urllib2.urlopen(second_previous_month_url_string).read()
    second_previous_month_soup = BeautifulSoup(second_previous_month_page, 'html.parser')

    new_way_extract_data(present_month_soup, MONTH[present_month])
    new_way_extract_data(previous_month_soup, MONTH[present_month - 1])
    new_way_extract_data(second_previous_month_soup, MONTH[present_month - 2])


def suphanburi():
    present_month_url_string = 'https://www.wunderground.com/history/airport/VTBK/2016/'+str(present_month)+'/21/MonthlyCalendar.html?req_city=Suphan%20Buri&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48425#calendar'
    present_month_page = urllib2.urlopen(present_month_url_string).read()
    present_month_soup = BeautifulSoup(present_month_page, 'html.parser')

    previous_month_url_string = 'https://www.wunderground.com/history/airport/VTBK/2016/'+str(present_month-1)+'/21/MonthlyCalendar.html?req_city=Suphan%20Buri&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48425#calendar'
    previous_month_page = urllib2.urlopen(previous_month_url_string).read()
    previous_month_soup = BeautifulSoup(previous_month_page, 'html.parser')

    second_previous_month_url_string = 'https://www.wunderground.com/history/airport/VTBK/2016/'+str(present_month-2)+'/21/MonthlyCalendar.html?req_city=Suphan%20Buri&req_statename=Thailand&reqdb.zip=00000&reqdb.magic=1&reqdb.wmo=48425#calendar'
    second_previous_month_page = urllib2.urlopen(second_previous_month_url_string).read()
    second_previous_month_soup = BeautifulSoup(second_previous_month_page, 'html.parser')

    new_way_extract_data(present_month_soup, MONTH[present_month])
    new_way_extract_data(previous_month_soup, MONTH[present_month - 1])
    new_way_extract_data(second_previous_month_soup, MONTH[present_month - 2])

def print_result():
    print "Month " + str(present_month) + " is : %s" % MONTH[present_month]
    # print "Month " + str(present_month - 1) + " is : %s" % MONTH[present_month - 1]
    # print "Month " + str(present_month - 2) + " is : %s" % MONTH[present_month - 2]
    # print type(MONTH[present_month])
    print json.loads(str(MONTH[present_month]).replace("'","\""))

def choose_province(province) :
    if province == 'Chiangmai':
        chiangmai()
    elif province == 'Ubonratchathani':
        ubonratchathani()
    elif province == 'Surin':
        surin()
    elif province == 'Suphanburi':
        suphanburi()
    print_result()


choose_province('Chiangmai')




