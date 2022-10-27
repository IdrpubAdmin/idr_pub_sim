# Metrix Project

- [Main Page](https://idrpubadmin.github.io/trial_pub_sim/study/metrix/index.html#/)



퍼블리싱 작업환경
---
- sass : Live sass compiler 사용
- vue.js : Httpvueloader, store, router 사용


퍼블리싱 산출물 디렉토리 구조
---
```markdown
metrix
   ├  assets : 정적 파일 소스
   │  ├  css  : css폴더
   │  ├  images : images폴더
   │  ├  js : js폴더 (데이터, 동작관련)
   │  ├  plugin : plugin폴더
   │  ├  scss  : scss폴더
   │  └  webfonts : font폴더
   ├  components  : components폴더
   │  ├  router.js : router
   │  └  store.js : store
   ├  main : 메인페이지
   └  index : 페이지별 link
```


컴포넌트 구조
---
```markdown
components
   ├  common : 공통 컴포넌트
   │  ├  AuthMain  : login,sidn up 페이지 메인
   │  ├  LogIn  : login 페이지
   │  └  SignUp  : sidn up 페이지
   ├  common : 공통 컴포넌트
   │  ├  ArticleSummary  : summary 컴포넌트
   │  ├  BarChart  : home > 막대그래프
   │  ├  DatePicker  : table > date popup > 달력
   │  ├  DatePopup  : table > date popup
   │  ├  FilterPopup  : table > filter popup
   │  ├  HeaderMain  : header
   │  ├  PieChart  : home > 파이그래프
   │  ├  SelectBox : Select 컴포넌트
   │  ├  SideNavigation  : Navigation
   │  └  TableBox : Table 컴포넌트
   ├  customers  : customers 페이지 컴포넌트
   │  ├  CustomersMain  : customers 페이지 메인
   │  ├  CustomersSummary : customers 페이지
   │  ├  NewCustomer : customers > new 모달 페이지
   │  └  ViewCustomer : customers > view 페이지
   ├  dashboard  : home 페이지 컴포넌트
   │  └  DashboardMain  : dashboard 페이지 메인
   ├  inventory  : inventory 페이지 컴포넌트
   │  ├  InventoryMain  : inventory 페이지 메인
   │  ├  InventorySummary  : inventory 페이지
   │  ├  NewInventory  : inventory > new 페이지
   │  └  ViewInventory  : inventory > view 페이지
   ├  orders  : orders 페이지 컴포넌트
   │  ├  NewOrder  : orders > New 페이지
   │  ├  OrdersMain  : orders 페이지 메인
   │  ├  OrdersSummary  : orders 페이지
   │  └  ViewOrder  : orders > view 페이지
   └  settings  : settings 페이지 컴포넌트
      ├  SettingsAccount  : settings 페이지
      ├  SettingsBusiness  : settings > business 페이지(접근불가 빈페이지)
      ├  SettingsMain  : settings 페이지 메인
      └  SettingsSecurity  : settings > security 페이지(접근불가 빈페이지)

```


style.scss 구조
---
  ```
 @import
	'common/font.scss', 
	'common/normalize_v3.0.3.scss',
	'common/normalize_v8.0.1.scss', 
	'common/reset.scss',
	'utils/mixin.scss',
	'utils/variables.scss', 
	'layout/common.scss', 
	'layout/chart.scss',
	'layout/article.scss', 
	'layout/date.scss',
	'layout/table.scss',
	'layout/modal.scss',  
	'layout/selectbox.scss', 
	'layout/button.scss', 
	'layout/container.scss', : 
	'layout/navigation.scss',
	'layout/header.scss',
	'pages/auth.scss',
	'pages/dashboard.scss',
	'pages/orders.scss',
	'pages/inventory.scss',
	'pages/customers.scss',
	'pages/settings.scss'
   
```
  


퍼블리싱 작업내용
---
- 기본폰트 : Poppins, Inter

- mediaQuery 분기사이즈
  mobile : ~ 480px
  tablet: 768px ~ 1023px
  desktop: 1024px ~

- 지원브라우저
크롬, 엣지, 파이어폭스, 사파리, 오페라


